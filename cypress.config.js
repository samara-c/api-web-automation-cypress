const { defineConfig } = require('cypress')

module.exports = defineConfig({
  reporter: 'cypress-mochawesome-reporter',

  reporterOptions: {
    reportDir: 'reports',
    charts: true,
    reportPageTitle: 'ServeRest Automation Report',
    embeddedScreenshots: true,
    inlineAssets: true,
    saveAllAttempts: false
  },

  env: {
    apiUrl: 'https://serverest.dev'
  },

  e2e: {
    baseUrl: 'https://front.serverest.dev',

    setupNodeEvents(on, config) {
      require('cypress-mochawesome-reporter/plugin')(on)

      return config
    }
  }
})