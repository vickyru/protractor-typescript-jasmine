import {Config} from 'protractor';
const puppeteer = require('puppeteer');

export let config: Config = {
    // The address of a running selenium server.
  seleniumAddress: 'http://localhost:4444/wd/hub',
  directConnect: true,

  // Capabilities to be passed to the webdriver instance.
  capabilities: {
    browserName: 'chrome',
    chromeOptions: {
      binary: puppeteer.executablePath()
    }
  },

  // Spec patterns are relative to the configuration file location passed
  // to protractor (in this example conf.js).
  // They may include glob patterns.
  specs: [
    './specs/calculator.spec.js'
  ],

  // Options to be passed to Jasmine-node.
  framework: 'jasmine',
  jasmineNodeOpts: {
    showColors: true, // Use colors in the command line report.
  }
}