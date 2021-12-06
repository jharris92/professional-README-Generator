const inquirer = require('inquirer');
const fs = require('fs');
const util = require('util');
const emailValidator = require('email-validator');

const generateMarkdown = require('.utils/generateMarkdown');

const questions = [
    {
        type: 'input',
        name: 'title',
        message: 'What is your project title?',
        validate: (value) => {
            if (value) { return true } else { return 'Please enter your project title'}
        },
    },
    {
        type: 'input',
        name: 'repo',
        message: 'What is the repository name of your project?',
        validate: (value) => {
            if (value) {return true} else { return 'Please enter your project title.'}
        },
    },
    {
        type: 'input',
        name: 'description',
        message: 'What is the description of your project?',
        validate: (value) => {
            if (value) { return true } else { return 'Please enter description.'}
        },
    },
    {
        type: 'input',
        name: 'installation',
        message: 'Enter instruction for installation',
        validate: (value) => {
            if (value) { return true } else { return 'Please enter instruction.'}
        },
    },
    {
        type: 'input',
        name: 'usage',
        message: 'What is the usage information',
        validate: (value) => {
            if (value) { return true } else { return 'Please enter usage information.'}
        },
    },
    {
        type: 'input',
        name: 'contribution',
        message: 'What are contribution guidelines?',
        validate: (value) => {
            if (value) { return true } else { return 'Please enter your contribution guidelines.'}
        },
    },
    {
        type: "input",
        name: 'test',
        message: 'what are the test instructions?',
        validate: (value) => {
            if (value) { return true } else { return 'Please enter your test instructions.'}
        },
    },
    {
        type: 'input',
        name: 'github',
        message: 'What is your Github username',
        validate: (value) => {
            if (value) { return true } else { return 'Please enter your username'}
        }, 
    },
    {
        type: 'input',
        name: 'email',
        message: 'What is your email address?',
        validate: (value) => {
            if (emailValidator.validate(value)) {
                return true
            } else { return 'Please enter valid email address'}
        },
    }
];

function writeToFile(fileName, data) {
    fs.writeFile(fileName, data, function (err){
        if (err) {
            console.log(err);
        } else {
            console.log('README file successfully created!');
        }
    })
};
