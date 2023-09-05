const { defineConfig } = require("cypress");

module.exports = defineConfig({
  viewportHeight:1000,
  viewportWidth:1200,
  video: true,

  e2e: {
    setupNodeEvents(on, config) {
      // implement node event listeners here

    },
    baseUrl:"https://www.google.com"

  },

});

