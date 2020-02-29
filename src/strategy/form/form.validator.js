class Validator {

  strategies = {};

  constructor(form) {
    this.form = form;
    this.form.addEventListener('submit', this.validate.bind(this));
  }

  validate(event) {
    if (this.isFormValid() === false) {
      event.preventDefault();
    }
  }

  setValidations(params) {
    params.map(({ name, validation }) => {
      if (validation) {
        this.strategies[name] = validation;
      }
    });
  }

  get fields() {
    return Array.from(this.form.elements);
  }

  isFormValid() {
    return this.fields.every(field => this.isFieldValid(field));
  }

  isFieldValid(field) {
    if (field.name in this.strategies) {
      const strategy = this.strategies[field.name];
      const isValid = strategy(field.value);
      if (!isValid) {
        field.focus();
        alert('Field "' + field.name + '" is not valid!');
      }
      return isValid;
    }
    return true;
  }
}













function logger(validations) {
  console.log('\n');
  Object.entries(validations).map(([ name, strategy ], index) =>
    console.log(index+1 + '. %c' + name + ' = %c' + strategy, 'color: lightgrey', 'color: green'));
  console.log('\n');
}