module.exports = {
    // Automatically clear mock calls and instances between every test
    clearMocks: true,
  
    // An array of glob patterns indicating a set of files for which coverage information should be collected
    collectCoverageFrom: ['src/**/*.{js,jsx,mjs}'],
  
    // The directory where Jest should output its coverage files
    coverageDirectory: 'coverage',
  
    // An array of file extensions your modules use
    moduleFileExtensions: ['js', 'json', 'jsx'],
  
    // The paths to modules that run some code to configure or set up the testing environment before each test
    // setupFilesAfterEnv: [
    //     './src/setupTests.js',
    //   ],
    setupFilesAfterEnv: ["<rootDir>src/setupTests.js"],
  
    // The test environment that will be used for testing
    testEnvironment: 'jsdom',
  
    // The glob patterns Jest uses to detect test files
    testMatch: ['**/__tests__/**/*.js?(x)', '**/?(*.)+(spec|test).js?(x)'],
  
    // An array of regexp pattern strings that are matched against all test paths, matched tests are skipped
    testPathIgnorePatterns: ['\\\\node_modules\\\\'],
  
    // This option sets the URL for the jsdom environment. It is reflected in properties such as location.href
    testURL: 'http://localhost',
  
    // An array of regexp pattern strings that are matched against all source file paths, matched files will skip transformation
    transformIgnorePatterns: ['/node_modules/'],

    moduleNameMapper: {
      "\\.(s?css|less)$": "identity-obj-proxy"
    },

    //removes the trace object cluttering the terminal - Disables stack trace in test results output.
    noStackTrace: true,
    
    // Indicates whether each individual test should be reported during the run
    verbose: false,
  };

  //NB add options from here https://deltice.github.io/jest/docs/en/cli.html#nostacktrace into this doc when wanting to use them - did this for noStackTrace one 