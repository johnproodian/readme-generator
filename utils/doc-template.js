module.exports = templateData => {

    // destructure data for headings
    const {title, description, confirmTOC, installation, usage, license, contributing, tests, questionsGitHub, questionsEmail} = templateData;
    
    const licenseFunction = licenseInput => {
        if (licenseInput === 'MIT license') {
            return `This application is covered by the [${license}](https://choosealicense.com/licenses/mit/)`
        } else if (licenseInput === 'GNU GPLv3') {
            return `This application is covered by the [${license} license](https://choosealicense.com/licenses/gpl-3.0/)`
        } else {
            return `This application is not covered by a license.`
        }
    }

    const licenseSection = licenseFunction(license);

    const generateLicenseBadge = licenseInput => {
        if (licenseInput === 'MIT license') {
            return `[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)`
        } else if (licenseInput === 'GNU GPLv3') {
            return `[![License: GPL v3](https://img.shields.io/badge/License-GPLv3-blue.svg)](https://www.gnu.org/licenses/gpl-3.0)`
        } else {
            return ""
        }
    };

    const licenseBadge = generateLicenseBadge(license);

    return `
${licenseBadge}

# ${title}
    
## Description
${description}

## Table of Contents
* [Installation](#installation)
* [Usage](#usage)
* [License](#license)
* [Contributing](#contributing)
* [Tests](#tests)
* [Questions](#questions)

## Installation
${installation}

## Usage
${usage}

## License
${licenseSection}

## Contributing
${contributing}

## Tests
${tests}

## Questions
[GitHub Profile](https://github.com/${questionsGitHub})<br>
For additional questions, [email me.](mailto:${questionsEmail})
`
}   

// Project Title

// Description

// TOC - links to other parts

// Installation

// Usage

// License

// Contributing

// Tests

// Questions - link to github profile

// 