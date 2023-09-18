const { defineConfig } = require("cypress");

module.exports = defineConfig({
  chromeWebSecurity: false,
  pageLoadTimeout: 10000,
  watchForFileChanges: false,
  execTimeout: 10000,
  env:{
    url: 'https://www.saucedemo.com/'
  },
  viewportHeight: 960,
  viewportWidth: 1600,
  e2e: {
    setupNodeEvents(on, config) {
      // implement node event listeners here
    },
  },
});
