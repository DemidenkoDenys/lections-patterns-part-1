

//---- Element Factory ----//

class ElementFactory {
  constructor() {}

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
    button.setAttribute('type', 'submit');
    button.innerHTML = 'Submit';
    return button;
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



//---- Form Factory ----//

class FormFactory {

  form;
  validations = {};
  elementFactory;

  constructor() {
    this.elementFactory = new ElementFactory();
    this.form = this.elementFactory.form;
    this.form.appendChild(this.elementFactory.submitButton);
    this.form.addEventListener('submit', (event) => {
      for (let i = 0; i < document.forms[0].elements.length; i++) {
        const field = document.forms[0].elements[i];
        if (this.validations[field.name]) {
          if (!this.validations[field.name].validate(field.value)) {
            field.focus();
            alert(this.validations[field.name].message);
            event.preventDefault();
            return false;
          }
        }
      }
    });
  }

  get form() {
    return this.form;
  }

  addField = (type, options) => {
    switch (type) {
      case 'text':
        this.addInputText(options);
        break;

      case 'number':
        this.addInputNumber(options);
        break;

      case 'password':
        this.addInputPassword(options);
        break;

      case 'select':
        this.addSelect(options);
        break;
    }
  }

  addInputText = ({ name, value, placeholder, label, validation }) => {
    const field = this.elementFactory.inputText;

    field.name = name;
    field.value = value || '';

    this.setId(field, this.getFieldId(name));
    this.setLabel(field, label);
    this.setPlaceholder(field, placeholder);
    this.setValidation(name, validation);

    this.form.appendChild(field);
  }

  addInputPassword = ({ name, value, placeholder, label, validation }) => {
    const field = this.elementFactory.inputPassword;

    field.name = name;
    field.value = value || '';

    this.setId(field, this.getFieldId(name));
    this.setLabel(field, label);
    this.setPlaceholder(field, placeholder);
    this.setValidation(name, validation);

    this.form.appendChild(field);
  }

  addInputNumber = ({ name, value, placeholder, label, min, max, validation }) => {
    const field = this.elementFactory.inputNumber;

    field.name = name;
    field.value = value || min || 0;

    this.setId(field, this.getFieldId(name));
    this.setMin(field, min);
    this.setMax(field, max);
    this.setLabel(field, label);
    this.setPlaceholder(field, placeholder);
    this.setValidation(name, validation);

    this.form.appendChild(field);
  }

  addSelect = ({ name, label, options, validation }) => {
    const select = this.elementFactory.select;
    
    select.name = name;

    this.setId(select, this.getFieldId(name));
    this.setLabel(select, label);
    this.setOptions(select, options);
    this.setValidation(name, validation);

    this.form.appendChild(select);
  }

  getSelectOption = (value, text) => {
    const option = this.elementFactory.option;
    option.value = value || this.uniqueId;
    option.text = text;
    return option;
  }

  getFieldId = name => `${name}-form-field`;

  get uniqueId() {
    return `_${Math.random().toString(36).substr(2, 9)}`;
  }


  // QUEST 3 - implement setPlaceholder function
  // QUEST 4 - create decorators for functions below

  setId = (element, id) => {
    if (element && id) {
      element.setAttribute('id', id);
    }
  }

  setMin = (element, value) => {
    if (element && value) {
      element.setAttribute('min', value);
    }
  }

  setMax = (element, value) => {
    if (element && value) {
      element.setAttribute('max', value);
    }
  }

  setPlaceholder = (element, placeholder) => {
    if (element && placeholder) {
      element.setAttribute('placeholder', placeholder);
    }
  }
  
  setLabel = (element, labelText) => {
    if (element, labelText) {
      const label = this.elementFactory.getLabel(labelText);
      this.form.appendChild(label);
    }
  }

  setOptions = (element, options) => {
    if (options && Array.isArray(options)) {
      options.map(({ value, text }) => {
        const option = this.getSelectOption(value, text);
        element.appendChild(option);
      });
    }
  }

  setValidation = (name, strategy) => {
    if (strategy) {
      this.validations[name] = strategy;
    }
  }
}
