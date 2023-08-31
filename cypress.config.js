const { defineConfig } = require("cypress");

module.exports = defineConfig({
  viewportHeight:1500,
  viewportWidth:2000,

  e2e: {
    setupNodeEvents(on, config) {
      // implement node event listeners here

    },
    baseUrl:"https://www.google.com"

  },

});

