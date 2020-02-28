class ElementFactory {
  constructor() {}

  getElement = type => {
    switch (type) {
      case 'text':
    }
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

  get select() {
    return document.createElement('select');
  }

  get option() {
    return document.createElement('option');
  }

  getLabel(text) {
    const label = document.createElement('label');
    label.textContent = text;
    label.setAttribute('for', text);
    return label;
  }
}