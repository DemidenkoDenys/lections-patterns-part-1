class Validator {

  form;
  strategies = {};

  constructor(form) {
    this.form = form;
    this.form.addEventListener('submit', this.validate.bind(this));
  }

  validate(event) {
    const isFormValid = this.isFormValid();
    if (!isFormValid) {
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

  isFormValid() {
    const formFields = Array.from(this.form.elements);
    return formFields.every(field => this.isFieldValid(field));
  }

  isFieldValid(field) {
    if (field.name in this.strategies) {
      const strategy = this.strategies[field.name];
      const isValid = strategy(field.value);
      if (!isValid) {
        field.focus();
        alert('Field "' + field.name + '" are not valid!');
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