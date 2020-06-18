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

    var data = `# ${answers.title}`



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