import { AllRegionsData, ApiResponse } from './types';
import axios, { AxiosError } from 'axios';

import https from 'https';
import { regions } from './config/config';
import { setCache } from './cache';

// A function to fetch data and cache it
export const fetchAndCacheDataHandler = async (): Promise<void> => {
  //Using "try & catch" block for error handling, "Promise.all" to fetch data for all the regions.
  try {
    //Adding this line to fix the "self-signed certificate in certificate chain" error.
    const httpsAgent = new https.Agent({ rejectUnauthorized: false });
    const allRegionsData: AllRegionsData = [];
    await Promise.all(
      regions.map(async (region: string): Promise<void> => {
        const { data } = await axios.get<ApiResponse>(
          `https://data--${region}.upscope.io/status?stats=1`,
          { httpsAgent }
        );
        if (data) {
          setCache(region, data);
          allRegionsData.push(data);
        } else {
          console.error(
            `\nError: Could not receive data for the region ${region}`
          );
        }
      })
    );
    if (allRegionsData.length !== regions.length) {
      console.error('\nError: Faild to recieve all the regions data :(');
    }
    setCache('all-regions', allRegionsData);
  } catch (error: unknown) {
    if (error instanceof AxiosError) {
      console.log(
        '\nError: There was a problem in Axios. Here is the details: \n',
        error.message
      );
    } else {
      console.log(
        '\nError: There was a problem in fetching data. Here is the details: \n',
        error
      );
    }
  }
};
