export default class ChainOfResponsibility {

  handler;
  message;
  next = null;

  constructor(handler, message) {
    this.handler = handler;
    this.message = message;
  }

  run(value) {
    if (this.handler(value) === false) {
      console.log('\x1b[31m ' + value + ' is not ' + this.message + ' - go next check');
      this.runNext(value);
    } else {
      console.log('\x1b[32m ' + value + '     is ' + this.message + ' - end');
    }
  }

  runNext(value) {
    if (this.next) {
      this.next.run(value);
    } else {
      console.log('\x1b[31m any match checks');
    }
  }

  setNext(handler) {
    this.next = handler;
  }
}