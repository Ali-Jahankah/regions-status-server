import { ApiResponse } from './types';

// Create an empty cache object with a proper type
const cache: {
  [key: string]: ApiResponse;
} = {};

// Create setter and getter for the cached data
export const setCache = (region: string, data: ApiResponse): void => {
  // Caching data for a specific region
  cache[region] = data;
};
export const getCache = (region: string): ApiResponse | undefined => {
  return cache[region];
};
