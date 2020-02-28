class ElementFactory {

  constructor() {}

  get uniqueId() {
    return `_${Math.random().toString(36).substr(2, 9)}`;
  }

  get form() {
    return document.createElement('form');
  }

  get inputText() {
    const field = document.createElement('input');
    field.setAttribute('type', 'text');
    return field;
  }

  get inputPassword() {
    const field = document.createElement('input');
    field.setAttribute('type', 'password');
    return field;
  }

  get inputNumber() {
    const field = document.createElement('input');
    field.setAttribute('type', 'number');
    return field;
  }

  get submitButton() {
    const button = document.createElement('button');
    button.type = 'submit';
    button.textContent = 'Submit';
    return button;
  }

  get select() {
    return document.createElement('select');
  }

  get option() {
    return document.createElement('option');
  }

  getOption(value, text) {
    const option = this.option;
    option.value = value || this.uniqueId;
    option.text = text;
    return option;
  }

  getLabel(text) {
    const label = document.createElement('label');
    label.textContent = text;
    return label;
  }
}