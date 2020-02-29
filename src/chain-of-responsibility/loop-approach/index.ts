import ChainOfResponsibility from './chain-of-responsibility';

const chain = new ChainOfResponsibility([
  value => value < 10,
  value => value < 20,
  value => value < 30,
  value => value < 40,
  value => value < 50,
  value => value < 60,
  value => value < 70,
  value => value < 80,
  value => value < 90,
]);

chain.checkLogged(56);