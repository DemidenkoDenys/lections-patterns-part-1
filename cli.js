const figlet = require('figlet');
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
        'decorator',
        'facade'
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
  ],
  facade: [
    {
      type: 'list',
      name: 'type',
      message: 'Choose facade example:',
      choices: [
        {
          name: 'API facade',
          value: 'facade:api'
        }, {
          name: 'jQuery facade commands',
          value: 'facade:jquery'
        }, {
          name: 'Angular facade',
          value: 'facade:angular'
        }, {
          name: 'React hooks facade',
          value: 'facade:react'
        },
      ],
    }
  ]
};

const run = async () => {
  const reportFiglet = text => console.log(`\x1b[32m${text}\n`);
  const askForChoose = async () => {
    const { pattern } = await inquirer.prompt(questions.patterns);
    const { type } = await inquirer.prompt(questions[pattern]);
    return execSync(`npm run ${type}`, { stdio: 'inherit' });
  }
  const executeCli = (_, text) => {
    reportFiglet(text);
    askForChoose();
  };
  figlet('Patterns  pt.1', executeCli);
};

run();