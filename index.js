const inquirer = require("inquirer");
const fs = require("fs");
const util = require("util");

const writeFileAsync = util.promisify(fs.writeFile);

// const questions = 

// array of questions for user
function promptUser(){
    return inquirer.prompt([
        {
            type: "input",
            name: "title",
            message: "What is the title of your project?"
        },
        {
            type: "input",
            name: "description",
            message: "Describe your project:"
        },
        {
            type: "input",
            name: "installation",
            message: "What are the installation instructions for this project?"
        },
        {
            type: "input",
            name: "usage",
            message: "How do you use this program?"
        },
        {
            type: "input",
            name: "contribution",
            message: "Are you open to contributions and what are your requirements for accepting them?"
        },
        {
            type: "input",
            name: "tests",
            message: "What command should the user use to run test?"
        },
        {
            type: "input",
            name: "question1",
            message: "What is your GitHub username?"
        },
        {
            type: "input",
            name: "question2",
            message: "What is your e-mail address?"
        },
        {
            type: "input",
            name: "license",
            message: "Which license is this program covered under?"
        }
    ]);
    
}


function generateReadme(answers) {
      return `
![GitHub license](https://img.shields.io/badge/license-${answers.license}-orange.svg)    
# ${answers.title}
# Description: 

    ${answers.description}

# Table of Contents: 
*[Installation](#installation)

*[Usage](#usage)

*[License](#license)

*[Contributing](#contributing)

*[Tests](#tests)

*[Questions](#questions)

# Installation: 

    ${answers.installation}

# Usage: 

    ${answers.usage}

# License: 

    ${answers.license}

# Contributing: 

    ${answers.contribution}

# Tests: 

    ${answers.tests}

# Questions: 

<a href="https://www.github.com/${answers.question1}">GitHub</a>

    For futher questions please e-mail me at: ${answers.question2}
    `;
    }

    promptUser()
        .then(function(answers) {
            const readme = generateReadme(answers);
        
            return writeFileAsync("README.md", readme);
          })
          .then(function() {
            console.log("Successfully wrote to README.md");
          })
          .catch(function(err) {
            console.log(err);
          });
