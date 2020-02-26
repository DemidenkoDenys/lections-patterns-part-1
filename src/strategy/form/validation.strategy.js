class ValidationStrategy {

  get requiredStrategy() {
    return {
      validate: value => !!value,
      message: 'Value is required',
    }
  }

  get emailSoftStrategy() {
    return {
      validate: value => value.includes('@') && email.includes('.') && email.split('.')[1].length >= 2,
      message: 'Must have at (@) symbol, contain dot and have domain with more than 2 letters',
    }
  }

  get emailStrictStrategy() {
    return {
      validate: value => /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(value),
      message: 'Must be a correct email address',
    }
  }

  get passwordSoftStrategy() {
    return {
      validate: value => value.length > 6,
      message: 'Must be more than 6 letters',
    }
  }

  get passwordStrictStrategy() {
    return {
      validate: value => value.length > 6,
      message: "Must contain at least one number and one uppercase and lowercase letter, and at least 8 or more characters",
    };
  }


}