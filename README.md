# API and Web Automation with Cypress for Mouuts IT
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
    └── testData.js ```



Page Objects are used to keep UI selectors and actions separated from the test scenarios.
API requests used for test setup and API validations are kept inside the services layer.
Test data generation is centralized in testData.js.

## Prerequisites

Before running the project, make sure you have installed:
- Node.js
- npm
- Git

## Installation
Clone the repository:
```git clone https://github.com/samara-c/api-web-automation-cypress.git```

Go to the project folder:
```cd api-web-automation-cypress```

Install the dependencies:
```npm install```

### Running the Tests
Open Cypress in interactive mode:
```npm run cy:open ```

Run all tests in headless mode:
```npm run cy:run```

or:
```npm test```


## Test Report
The project uses cypress-mochawesome-reporter.
After a headless execution, the HTML report is generated inside:
reports/

The reports folder is ignored by Git because it is generated during test execution.


## Use of AI
AI was used as a support tool during the development of this project.

ChatGPT was used mainly to:
- discuss test design and project organization
- review different implementation approaches
- help investigate Cypress configuration and version-related issues
- review test ideas and assertions
- support documentation

The generated suggestions were reviewed and adapted before being included in the project.
Other references used during development included the Cypress documentation, ServeRest documentation/source code, GitHub, Google and Stack Overflow.

###Notes
ServeRest uses a shared online environment, so test data may be visible to other users.
For this reason, users and products created by the automation use dynamically generated values whenever possible to reduce conflicts between executions.