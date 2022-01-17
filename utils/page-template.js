module.exports = templateData => {

    // destructure data for headings
    const {title, description, confirmTOC, installation, usage, license, contributing, tests, questionsGitHub, questionsEmail} = templateData;
    
    return `
    # ${title}
    
    ## Description
    ${description}
    
    ## Table of Contents
    
    ## Installation
    ${installation}
    
    ## Usage
    ${usage}
    
    ## License
    ${license}
    
    ## Contributing
    ${contributing}

    ## Tests
    ${tests}
    
    ## Questions
    [GitHub Profile](https://github.com/${questionsGitHub})
    [Email](mailto:${questionsEmail})
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