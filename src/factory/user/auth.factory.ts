import { prompt } from 'inquirer';

const authFactory = {

  authenticate: async password => {
    const { accessor } = await prompt({
      type: 'password',
      name: 'accessor',
      message: 'Enter your password:'
    });

    if (accessor !== password) {
      console.log('\x1b[31m\nACCESS DENIED !!!');
      return false;
    }

    return true;
  }
}

export default authFactory;
