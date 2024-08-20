import { AllRegionsData, ApiResponse } from './../types';
import { getCache, setCache } from './../cache';

import { apiResponseMockData } from '../config/config';
import { mockAllData } from './../config/config';

// Define mock data

const mockAllRegionsData = mockAllData;

beforeEach(() => {
  // Clear the cache object before each test to ensure a clean state
  jest.resetModules();
});

describe('Cache', () => {
  it('should set and get cached data for a specific region', () => {
    // Set cache data
    setCache('us-west', apiResponseMockData as ApiResponse);

    // Get cache data
    const cachedData = getCache('us-west');

    expect(cachedData).toEqual(apiResponseMockData);
  });

  it('should return undefined for a region not in the cache', () => {
    // Get cache data for a no-region region
    const cachedData = getCache('no-region');

    // Assert that the result is undefined
    expect(cachedData).toBeUndefined();
  });

  it('should cache and retrieve an array of ApiResponse', () => {
    // Set cache data with AllRegionsData
    setCache('all-regions', mockAllRegionsData as AllRegionsData);

    // Get cache data
    const cachedData = getCache('all-regions');

    expect(cachedData).toEqual(mockAllRegionsData);
  });
});
