# API and Web Automation with Cypress for MOUTS IT

### Author: Samara Cardoso

Automation project created using Cypress and JavaScript to test the ServeRest application.

The project contains automated scenarios for both the frontend and the API, including positive and negative validations.

## Tech Stack

- JavaScript
- Cypress 16
- Page Object Model
- Cypress `cy.request()` for API testing
- Mochawesome Reporter
- Git / GitHub
- VS Code

## Application Under Test

Frontend:

https://front.serverest.dev/

API:

https://serverest.dev/

## Test Scenarios

### UI

The UI suite contains the following scenarios:

- Successful user registration
- Login with invalid credentials
- Product registration by an administrator

The product registration scenario creates the administrator through the API before executing the UI flow, avoiding dependency on another UI test.

### API

The API suite contains:

- Successful user creation
- User creation using an already registered email
- Retrieve a created user by ID

Dynamic test data is generated during execution to reduce conflicts with the shared ServeRest environment.

## Project Structure

```text
cypress/
├── e2e/
│   ├── api/
│   │   └── users.cy.js
│   └── ui/
│       ├── login.cy.js
│       ├── product-registration.cy.js
│       └── registration.cy.js
│
├── pages/
│   ├── AdminHomePage.js
│   ├── HomePage.js
│   ├── LoginPage.js
│   ├── ProductPage.js
│   ├── ProductsListPage.js
│   └── RegisterPage.js
│
├── services/
│   └── usersApi.js
│
├── support/
│
└── utils/
    └── testData.js
```

Page Objects are used to keep UI selectors and actions separated from the test scenarios.

API requests used for test setup and API validations are kept inside the `services` layer.

Test data generation is centralized in `testData.js`.

## Prerequisites

Before running the project, make sure you have installed:

- Node.js
- npm
- Git

## Installation

Clone the repository:

```bash
git clone https://github.com/samara-c/api-web-automation-cypress.git
```

Go to the project folder:

```bash
cd api-web-automation-cypress
```

Install the dependencies:

```bash
npm install
```

## Running the Tests

Open Cypress in interactive mode:

```bash
npm run cy:open
```

Run all tests in headless mode:

```bash
npm run cy:run
```

or:

```bash
npm test
```

## Test Report

The project uses `cypress-mochawesome-reporter`.

After a headless execution, the HTML report is generated inside:

```text
reports/
```

The `reports` folder is ignored by Git because it is generated during test execution.

## Security Considerations

No real credentials, tokens or API keys are stored in the repository.

Sensitive configuration files such as `.env` and `cypress.env.json` are ignored by Git.

The credentials used in the automated scenarios are generated exclusively for testing purposes and do not represent real user data.

Public application URLs are kept in the Cypress configuration, while sensitive values should be provided through environment variables when required.

## Use of AI

AI was used as a support tool during the development of this project.

ChatGPT was used mainly to:

- Review different implementation approaches
- Help investigate Cypress configuration and version-related issues
- Review test ideas and assertions
- Support documentation

The generated suggestions were reviewed and adapted before being included in the project.

Other references used during development included the Cypress documentation, ServeRest documentation and source code, GitHub, Google, and Stack Overflow.

## Notes

ServeRest uses a shared online environment, so test data may be visible to other users.

For this reason, users and products created by the automation use dynamically generated values whenever possible to reduce conflicts between executions.