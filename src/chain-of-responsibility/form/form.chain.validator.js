class ChainValidator {

  constructor(form) {
    this.elements = form.elements;
    form.addEventListener('submit', this.validate.bind(this));
  }

  set chain(strategies) {
    this.strategies = strategies;
  }

  validate = event => {
    const chainLength = this.strategies.length;

    for (let i = 0; i < chainLength; i++) {
      const { name, strategy } = this.strategies[i];
      const { value } = this.elements[name];

      if (strategy(value) === false) {
        event.preventDefault();
        alert('Field ' + name + ' is not valid');
        this.elements[name].focus();
        return false;
      }
    }
  }
}
