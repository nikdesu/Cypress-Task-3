# Task 3 Cypress framework
<a name="readme-top"></a>

<!-- TABLE OF CONTENTS -->
<details>
  <summary>Table of Contents</summary>
  <ol>
    <li>
      <a href="#about-the-project">About The Project</a>
    </li>
    <li>
      <a href="#getting-started">Getting Started</a>
      <ul>
        <li><a href="#prerequisites">Prerequisites</a></li>
        <li><a href="#installation">Installation</a></li>
      </ul>
    </li>
    <li><a href="#running-test">Running test</a></li>
    <li><a href="#writing-tests">Writing tests</a></li>
    <li><a href="#test-reports">Test reports</a></li>
  </ol>
</details>

<!-- ABOUT THE PROJECT -->
## About the project
This repository contains a test suite for a web application, written using Cypress and TypeScript. Cypress is a next generation front end testing tool built for the modern web, and TypeScript enhances code quality and provides static type checking.
<p align="right">(<a href="#readme-top">back to top</a>)</p>

<!-- GETTING STARTED -->
## Getting started
### Prerequisites

Before running the tests, make sure you have the following dependencies installed:

Node.js: Install Node.js from https://nodejs.org/en
<p align="right">(<a href="#readme-top">back to top</a>)</p>

### Installation

1. Clone the repo:
   ```bash
   git clone https://github.com/nikdesu/Cypress-Task-3
   ```
2. Navigate to the project directory:
   ```bash
   cd cypress-typescript-tests
   ```
3. Installing Cypress
   ```bash
   npm install cypress --save-dev
   ```
4. Install the project dependencies:
   ```bash
   npm install
   ```
   <p align="right">(<a href="#readme-top">back to top</a>)</p>
<!-- USAGE EXAMPLES -->
## Running test

To run the test suite, execute the following command:

```bash
npx cypress run
```
If you need to run the tests using a specific browser or with other configurations, you can modify the command within the script. For instance, to specify a browser, you can use:
```bash
npx cypress run --browser chrome
```
<p align="right">(<a href="#readme-top">back to top</a>)</p>

<!-- WRITING TESTS -->
## Writing tests 
You can start writing your own tests in the tests directory. Follow the Cypress API documentation to interact with your web application. Ensure that your test files are written in TypeScript (.ts extension) and located in the tests directory.
<p align="right">(<a href="#readme-top">back to top</a>)</p>

<!-- TEST REPORTS -->
## Test reports 
This will redirect the output of the npx cypress run command to a file named test-report.txt.
```bash
npx cypress run > test-report.txt
```
<p align="right">(<a href="#readme-top">back to top</a>)</p>
