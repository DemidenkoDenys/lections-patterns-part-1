import { prompt } from 'inquirer';
import authFactory from './auth.factory';

export default class UserFactory {

  constructor() {}

  createAuthor = (firstname, lastname, password = '') => ({
    firstname,
    lastname,
    password,
    token: 'AUTHOR_TOKEN',

    publishArticle: async () => {
      const { publish } = await prompt({
        type: 'input',
        name: 'publish',
        message: 'Enter article\'s text'
      });

      const authenticated = await authFactory.authenticate(password);
      if (!authenticated) { return; }
      
      console.log(`\x1b[32m\nArticle \n\n${publish}\n\nhas published`);
    }
  })

  createEditor = (firstname, lastname, password = '') => ({
    firstname,
    lastname,
    password,
    token: 'EDITOR_TOKEN',

    approveArticle: async () => {
      const { approved } = await prompt({
        type: 'confirm',
        name: 'approved',
        message: 'Do you approve this article?'
      });
      
      const authenticated = await authFactory.authenticate(password);
      if (!authenticated) { return; }

      const approvedMessage = approved ? '\x1b[32m\nApproved :)' : '\x1b[31m\nDenied :(';
      console.log(approvedMessage);
    },

    approveComment: async() => {
      const { approved } = await prompt({
        type: 'confirm',
        name: 'approved',
        message: 'Comment text: "Awesome article, thank you". Do you approve it?"'
      });

      const authenticated = await authFactory.authenticate(password);
      if (!authenticated) { return; }

      const approvedMessage = approved ? '\x1b[32m\nApproved :)' : '\x1b[31m\nDenied :(';
      console.log(approvedMessage);
    }
  })

  createReader = (firstname, lastname) => ({
    firstname,
    lastname,
    token: 'READER_TOKEN',
    openArticle: () => console.log('\x1b[33m\nThis article is about factory pattern in frontend ...\nThis pattern are realy useful in cases when\nit\'s needed to create a lot of object with similar\nstructure. It\'s the most common pattern in programming world.\n'),
  })
 
}
