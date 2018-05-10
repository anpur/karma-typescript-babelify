module.exports = function (config) {
  if (process.env.BROWSERSTACK_USERNAME && process.env.BROWSERSTACK_ACCESS_KEY) {
    console.log('Using BROWSERSTACK_USERNAME and BROWSERSTACK_ACCESS_KEY env variables to connect to BrowserStack');
  } else {
    console.warn('Assing BROWSERSTACK_USERNAME and BROWSERSTACK_ACCESS_KEY env variables to connect to BrowserStack');
  }

  config.set({
    basePath: '',

    frameworks: ['mocha', 'karma-typescript'],

    files: [
      'src/*.ts'
    ],

    preprocessors: {
      'src/*.ts': ['karma-typescript'],
    },

    babelPreprocessor: {
      options: {
        presets: [
          ['@babel/env'],
          ['@babel/typescript']
        ]
      }
    },

    reporters: ['progress', 'karma-typescript', 'mocha'],

    karmaTypescriptConfig: {
      compilerOptions: {
        sourceMap: true,
        target: 'es6'
      },
      bundlerOptions: {
        addNodeGlobals: true,
        sourceMap: true
      },
      tsconfig: './tsconfig.json'
    },

    port: 9876,

    colors: true,

    logLevel: config.LOG_DEBUG,

    autoWatch: false,

    singleRun: false,

    concurrency: Infinity,

    browsers: [
      'Chrome',
      //'bs_ie',
      //'bs_firefox_mac'
    ],

    /* Browserstack */

    browserNoActivityTimeout: 10 * 60 * 1000,
    browserDisconnectTolerance: 2,
    browserDisconnectTimeout: 10000,

    browserStack: {
      username: process.env.BROWSERSTACK_USERNAME,
      accessKey: process.env.BROWSERSTACK_ACCESS_KEY
    },

    customLaunchers: {
      bs_ie: {
        base: 'BrowserStack',
        browser: 'IE',
        browser_version: '10',
        os: 'Windows',
        os_version: '7'
      },
      bs_firefox_mac: {
        base: 'BrowserStack',
        browser: 'firefox',
        browser_version: '44.0',
        os: 'OS X',
        os_version: 'Mountain Lion'
      },
    }
  });
};
