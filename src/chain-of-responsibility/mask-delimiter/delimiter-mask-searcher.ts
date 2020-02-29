export default class DelimiterMaskSearcher {

  chain: Function[];

  constructor() {}

  setChain(...args) {
    this.chain = args;
  }

  find(value) {
    return this.chain.reduce((acc, operator) => operator(acc), value);
  }

}
