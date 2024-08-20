import { AllRegionsData, ApiResponse } from './../types';

import { dataTimer } from './../utils/helperFunctions';
import { fetchAndCacheDataHandler } from '../api';
import { mockData } from '../config/config';

// Mock the fetchAndCacheDataHandler() function
jest.mock('../api', () => ({
  fetchAndCacheDataHandler: jest.fn()
}));

describe('dataTimer', () => {
  beforeEach(() => {
    // using a built in timer
    jest.useFakeTimers();
    (fetchAndCacheDataHandler as jest.Mock).mockResolvedValue(
      mockData as ApiResponse | AllRegionsData
    );
    // Track the logs
    jest.spyOn(console, 'log').mockImplementation(() => {});
  });

  afterEach(() => {
    jest.clearAllTimers();
    jest.clearAllMocks();
    dataTimer('stop'); // Ensure the timer is stopped after each test
  });

  it('should start the timer and fetch data every 60 seconds', async () => {
    dataTimer('start');

    // Ensure fetchAndCacheDataHandler() is called once after timer started
    expect(fetchAndCacheDataHandler).toHaveBeenCalledTimes(1);

    // Advance time by 60 seconds
    jest.advanceTimersByTime(60000);

    // ensure all async functions complete
    await Promise.resolve();

    // Ensure fetchAndCacheDataHandler will be called after 60 seconds
    expect(fetchAndCacheDataHandler).toHaveBeenCalledTimes(2);

    // Get all the calls as an array
    const logCalls = (console.log as jest.Mock).mock.calls;

    // Find the expected log message
    const expectedMessage = 'Data updated. Next update after 60 seconds...';
    const finalLogMessage = logCalls.find((call) =>
      call[0].includes(expectedMessage)
    );

    expect(finalLogMessage).toBeDefined();
  });

  it('should log countdown every second', () => {
    console.log = jest.fn();

    dataTimer('start');

    jest.advanceTimersByTime(10000); // 10 seconds

    expect(console.log).toHaveBeenCalledWith('Next Update after 50 seconds...');
  });

  it('should not start a new timer if one is already running', () => {
    console.log = jest.fn();

    dataTimer('start');
    dataTimer('start'); // This should not start a new timer

    jest.advanceTimersByTime(1000); // 1 second

    expect(fetchAndCacheDataHandler).toHaveBeenCalledTimes(1);
    expect(console.log).toHaveBeenCalledWith('Timer is already running');
  });

  it('should stop the timer and reset the counter', () => {
    const clearIntervalSpy = jest.spyOn(global, 'clearInterval');

    dataTimer('start');
    jest.advanceTimersByTime(30000); // 30 seconds
    dataTimer('stop');

    expect(clearIntervalSpy).toHaveBeenCalled();
    expect(fetchAndCacheDataHandler).toHaveBeenCalledTimes(1); // only the initial call
    expect(console.log).toHaveBeenCalledWith('Timer stopped and reset');
  });

  it('should log if there is no timer to stop', () => {
    console.log = jest.fn();
    dataTimer('stop');
    expect(console.log).toHaveBeenCalledWith('No timer to stop');
  });
});
