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
        
    }
]