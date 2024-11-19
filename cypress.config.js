const { defineConfig } = require("cypress");

// cypress.config.js
module.exports = {
  reporter:'cypress-mochawesome-reporter',
  reporterOptions: {
  charts: true,
  reportPageTitle: 'Exercise-Report',
  embeddedScreenshots: true,
  inlineAssets: true,
  saveAllAttempts: false,
  },
  e2e: {
    setupNodeEvents(on, config) {
      require('cypress-mochawesome-reporter/plugin')(on);
    },

    // Configura el patrón para las pruebas
    specPattern: 'cypress/e2e/**/*.cy.{js,jsx,ts,tsx}',

    // Otras configuraciones de Cypress pueden ir aquí
    baseUrl: 'https://automationexercise.com',  // URL base para tus pruebas (ajusta según sea necesario)
  },
};