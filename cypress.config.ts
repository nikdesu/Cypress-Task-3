import { defineConfig } from "cypress";

export default defineConfig({
  projectId: "wpbsxw",
  reporter: 'cypress-mochawesome-reporter',
  e2e: {
    baseUrl: "https://demo.realworld.io/#/",
    setupNodeEvents(on, config) {

            require('cypress-mochawesome-reporter/plugin')(on);
      
          },
  },
});
