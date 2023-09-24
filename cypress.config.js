const { defineConfig } = require("cypress");

module.exports = defineConfig({
  viewportHeight:1000,
  viewportWidth:1200,
  
  e2e: {
    setupNodeEvents(on, config) {
      // implement node event listeners here

    },
    baseUrl:"https://wisequarter.com",
    projectId: "cuc4h1",
    video: false, //Video kaydı alınmasını engeller. False yerine true yapılarak kayıt alınması sağlanabilir.
    retire:2      // Fail olan testlerin iki defa daha çalıştırılmasını sağlar.



  },

});

