// TODO: Include packages needed for this application
const inquirer = require('inquirer');
const generateDoc = require('./utils/doc-template');
const fs = require('fs');

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
            choices: ['MIT license', 'GNU GPLv3', 'none']
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
