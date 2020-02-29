const figlet = require('figlet');
const inquirer = require('inquirer');
const { execSync } = require('child_process');
const questionsFactory = require('./cli-questions.factory');


const patterns = {
  singleton: {
    simpliest: 'Simpliest implementation of Singleton',
    class: 'Singleton written by class',
    module: 'Singleton written by module',
  },
  decorator: {
    readonly: 'Readonly decorator',
    arrayWrapper: 'Array wrapper decorator',
    console: 'Decorator of console messages',
    react: 'React component decorator'
  },
  builder: {
    react: 'React component builder',
    user: 'User builder'
  },
  facade: {
    api: 'API facade',
    angular: 'Angular facade',
    react: 'React hooks facade'
  },
  factory: {
    form: 'Javascript form factory',
    user: 'User factory'
  },
  flyweight: {
    settings: 'Flyweight settings example'
  },
  strategy: {
    form: 'Form strategy validation',
  },
  chain: {
    form: 'Chained form validation',
    classic: 'Classic chain of responsibility pattern',
    loop: 'Chain of responsibility - loop approach'
  }
};


const questions = {
  ...questionsFactory.setRootList('patterns', 'Choose pattern to run:', Object.keys(patterns)),
  ...questionsFactory.setChoiceLists(patterns)
}


const run = async () => {
  const reportFiglet = text => console.log(`\x1b[32m${text}\n`);
  const askForChoose = async () => {
    const { patterns } = await inquirer.prompt(questions.patterns);
    const { type } = await inquirer.prompt(questions[patterns]);
    return execSync(`npm run ${type}`, { stdio: 'inherit' });
  }
  const executeCli = (_, text) => {
    reportFiglet(text);
    askForChoose();
  };
  figlet('Patterns  pt.1', executeCli);
};

run();