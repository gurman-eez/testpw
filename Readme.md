# Page Object Model Framework with Playwright & TypeScript

This project is a test automation framework that leverages the Page Object Model (POM)
design pattern together with Playwright and TypeScript. The tests are written to ensure
high maintainability, scalability, and readability.

## Prerequisites

- Node.js: Make sure you have Node.js (v14 or higher is recommended) installed.
- npm: Node Package Manager (npm) should be installed along with Node.js.

## Installation

Run the following command in your project root:

npm install

## Configuration

The Playwright configuration file (playwright.config.ts) contains global settings, including
browser options, timeouts, and reporters. Adjust these settings as needed for your environment
and project requirements.

## Running Tests

You can run all tests using the following command:

npm run test

This command uses the Playwright Test Runner to execute your test suite. During execution,
Playwright will launch the specified browser projects and report the test outcomes.

## Additional Commands

- Running in Headed Mode:
  If you need to debug or visually inspect tests, use the following command:

  npm run test:headed

- Generating an HTML Report:
  After tests run, you can open the HTML report by running:

  npx playwright show-report
