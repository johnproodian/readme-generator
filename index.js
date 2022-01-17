// TODO: Include packages needed for this application
const inquirer = require('inquirer');
const generateDoc = require('./utils/page-template');
const fs = require('fs');

// TODO: Create an array of questions for user input
const questions = [];

// TODO: Create a function to write README file
function writeToFile(fileName, data) {}

// TODO: Create a function to initialize app
function init() {}

// Function call to initialize app
init();

inquirer
    .prompt([
        {
            type: 'input',
            name: 'title',
            message: 'What is the name of your project?',
        }, 
        {
            type: 'input',
            name: 'description',
            message: 'Describe your project:'
        },
        // actually--prompt whether user would like a TOC first?
        {
            type: 'confirm',
            name: 'confirmTOC',
            message: 'Would you like a table of contents?'
            // generate toc if so...
        },
        {
            type: 'input',
            name: 'installation',
            message: 'Enter instructions for installing the application:'
        },
        {
            type: 'input',
            name: 'usage',
            message: 'Describe how to use the application:'
        },
        {
            type: 'list',
            name: 'license',
            message: 'Choose a license:',
            choices: ['this one', 'that one', 'another one']
        },
        {
            type: 'input',
            name: 'contributing',
            message: 'Enter guidelines for contributing to this project:'
        },
        {
            type: 'input',
            name: 'tests',
            message: 'Enter test instructions:'
        },
        {
            type: 'input',
            name: 'questionsGitHub',
            message: 'What is your GitHub username?'
        },
        {
            type: 'input',
            name: 'questionsEmail',
            message: 'What is your email?'
        }

    ])
    .then((answers) => {
        const docMarkdown = generateDoc(answers);
        fs.writeFile('./Develop/README.md', docMarkdown, err => {
            if (err) throw new Error(err);
        })
    });

    // these: Installation, Usage, License, Contributing, Tests, and Questions


// console.log(inquirer);
