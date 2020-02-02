const inquirer = require('inquirer');
const { execSync } = require('child_process');

const questions = {
  patterns: [
    {
      type: 'list',
      name: 'pattern',
      message: 'Choose pattern to run:',
      choices: [
        'singleton',
        'decorator'
      ],
      default: 'singleton',
    }
  ],
  singleton: [
    {
      type: 'list',
      name: 'type',
      message: 'Choose singleton type:',
      choices: [
        {
          name: 'Simpliest implementation of Singleton',
          value: 'singleton:simpliest'
        }, {
          name: 'Singleton written by class',
          value: 'singleton:class',
        }, {
          name: 'Singleton written by module',
          value: 'singleton:module',
        },
      ],
    }
  ],
  decorator: [
    {
      type: 'list',
      name: 'type',
      message: 'Choose decorator example:',
      choices: [
        {
          name: 'Readonly decorator',
          value: 'decorator:readonly'
        }, {
          name: 'Array wrapper decorator',
          value: 'decorator:array-wrapper'
        }, {
          name: 'Decorator of console messages',
          value: 'decorator:console'
        }, {
          name: 'React component decorator',
          value: 'decorator:react'
        },
      ],
    }
  ]
};

const run = async () => {
  const { pattern } = await inquirer.prompt(questions.patterns);
  const { type } = await inquirer.prompt(questions[pattern]);
  return execSync(`npm run ${type}`, { stdio: 'inherit' });
};

run();