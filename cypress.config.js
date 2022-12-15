const { defineConfig } = require("cypress");

module.exports = defineConfig({
  e2e: {
    setupNodeEvents(on, config) {
      // implement node event listeners here
    },    
    projectId: '5yw7jp',
    viewportWidth: 1440,
    viewportHeight: 900,
    baseUrl: 'https://buger-eats-qa.vercel.app',
    testIsolation: false
  },
});

// const { defineConfig } = require("cypress");

// module.exports = defineConfig({
//   e2e: {
//     setupNodeEvents(on, config) {
//       // implement node event listeners here
//     },
//   },
// });