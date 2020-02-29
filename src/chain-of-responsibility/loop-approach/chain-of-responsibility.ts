export default class ChainOfResponsibility {

  chain: Function[];

  constructor(chain: Function[]) {
    this.chain = chain;
  }

  check = value => this.chain.some(chain => chain(value));

  checkLogged = value => this.chain.some(chain => {
    const result = chain(value);
    if (!result) {
      console.log('\x1b[31m ' + value + ' is not match - go next check');
    } else {
      console.log('\x1b[32m ' + value + ' is match - end');
    }
    return result;
  });
}