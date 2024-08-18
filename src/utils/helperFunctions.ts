import { Server } from 'http';
import { fetchAndCacheDataHandler } from '../api';
import { getCache } from '../cache';
export const startServer = (server: Server, port: number | string): void => {
  server.listen(port, () => {
    console.log(`Server is running on port ${port}`);
    dataTimer('start');
  });
};

// Create a function that start or stop a timer to inform the users that when data will update
let timerId: NodeJS.Timeout | null = null;
let seconds: number = 0;

export const dataTimer = (action: 'start' | 'stop'): void => {
  if (action === 'start') {
    if (timerId === null) {
      // Initial data fetch
      fetchAndCacheDataHandler().then(() => {
        console.log('Data updated. Next update after 60 seconds...');
      });

      timerId = setInterval(() => {
        console.log(seconds);
        seconds += 10;
        if (seconds >= 60) {
          // Update data and call the API every 60 seconds
          fetchAndCacheDataHandler().then(() => {
            console.log('Data updated. Next update after 60 seconds...');
            const test = getCache('eu-west')!;
            console.log('Cached data:', test);
          });

          // Reset the timer
          seconds = 0;
        } else {
          //Log the seconds evry 10 seconds
          console.log(`Next Update after ${60 - seconds} seconds...`);
        }
      }, 10000);
    } else {
      console.log('Timer is already running');
    }
  } else if (action === 'stop') {
    if (timerId !== null) {
      clearInterval(timerId);
      timerId = null;
      seconds = 0;
      console.log('Timer stopped and reset');
    } else {
      console.log('No timer to stop');
    }
  }
};
