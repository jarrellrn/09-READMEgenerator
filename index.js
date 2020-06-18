const fs = require("fs");
const inquirer = require("inquirer");

function runInq(){
    inquirer
  .prompt([
    {
      name: 'title',
      message: 'Title of your project'
    },
    {
        name: 'description',
        message: 'Description of your project'
    },
    {
      name: 'installation',
      message: 'How do you install your project?',
    },
    {
        name: 'usage',
        message: 'How do you use your project?'
    },
    {
        name: 'license',
        message: 'What license is your project under?',
        type: 'list',
        choices: ['ISC','Apache License 2.0', 'GPL','MIT License','Mozilla Public License 2.0']
    },
    {
        name: 'contributing',
        message: 'Who contributed to your project?'
    },
    {
        name: 'tests',
        message: 'Test instructions?',
        default: 'N/A'
    },
    {
        name:'questionsUsername',
        message: 'Enter username for questions'
    },
    {
        name: 'questionsEmail',
        message: 'Enter email for questions'
    },
  ])
  .then(function(answers){

    var data =
    `# ${answers.title}\n\n` +
    `## Description\n ${answers.description}\n` +
    `## Table of contents\n` +
    `1. [Installation](#installation)\n` +
    `2. [Usage](#usage)\n` +
    `3. [License](#license)\n` +
    `4. [Contributing](#contributing)\n` +
    `5. [Tests](#tests)\n` +
    `6. [Questions](#questions)\n\n` +
    `### Installation: <a name="installation"></a>\n ${answers.installation}\n` +
    `### Usage: <a name="usage"></a>\n ${answers.usage}\n` +
    `### License: <a name="license"></a>\n ${answers.license}\n` +
    `### Contributing: <a name="contributing"></a>\n ${answers.contributing}\n` +
    `### Tests: <a name="tests"></a>\n ${answers.tests}\n` +
    `### Questions: <a name="questions"></a>\n` +
    `If you have any questions or concerns, my github is ${answers.questionsUsername}. Or you can email me at ${answers.questionsEmail}.`




    fs.writeFile('README.md', data, 'utf-8', (err) =>
	{
        if (err) throw err;
        else {
            return console.log("Complete!")
        }
	});
  });
}

runInq();