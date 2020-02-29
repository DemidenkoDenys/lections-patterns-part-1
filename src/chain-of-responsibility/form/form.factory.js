class ElementFactory {
  constructor() {}

  get uniqueId() {
    return `_${Math.random().toString(36).substr(2, 9)}`;
  }

  get form() {
    return document.createElement('form');
  }

  get submitButton() {
    const button = document.createElement('button');
    button.type = 'submit';
    button.textContent = 'Submit';
    return button;
  }

  get inputText() {
    const field = document.createElement('input');
    field.setAttribute('type', 'text');
    return field;
  }

  get inputPassword() {
    const field = document.createElement('input');
    field.setAttribute('type', 'text');
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

const elementFactory = new ElementFactory();

class FormFactory {

  constructor(params) {
    this.form = elementFactory.form;
    params.map(param => this.addField(param));
  }

  addField = (options) => {
    const field = this.getField(options);
    this.form.appendChild(field);
  }

  getField(options) {
    switch (options.type) {
      case 'text':
        return this.getInputTextElement(options);
      case 'number':
        return this.getInputNumberElement(options);
      case 'password':
        return this.getInputPasswordElement(options);
      case 'select':
        return this.getSelectElement(options);
    }
  }

  getInputTextElement = ({ name, value, placeholder, label }) => {
    const field = elementFactory.inputText;
    this.setId(field, this.getFieldId(name));
    this.setName(field, name);
    this.setValue(field, value);
    this.setLabel(field, label);
    this.setPlaceholder(field, placeholder);
    return field;
  }

  getInputPasswordElement = ({ name, value, placeholder, label }) => {
    const field = elementFactory.inputPassword;
    this.setId(field, this.getFieldId(name));
    this.setName(field, name);
    this.setValue(field, value);
    this.setLabel(field, label);
    this.setPlaceholder(field, placeholder);
    return field;
  }

  getInputNumberElement = ({ name, value, placeholder, label, min, max }) => {
    const field = elementFactory.inputNumber;
    this.setId(field, this.getFieldId(name));
    this.setName(field, name);
    this.setValue(field, value || min || 0);
    this.setLabel(field, label);
    this.setPlaceholder(field, placeholder);
    return field;
  }

  getSelectElement = ({ name, label, options }) => {
    const select = elementFactory.select;
    this.setId(select, this.getFieldId(name));
    this.setLabel(select, label);
    this.setOptions(select, options);
    return select;
  }

  getForm() {
    this.form.appendChild(elementFactory.submitButton);
    return this.form;
  }

  getFieldId = name => `${name}-form-field`;

  setId = (element, id) => {
    if (element && id) {
      element.setAttribute('id', id);
    }
  }

  setName = (element, name) => {
    if (element && name) {
      element.name = name;
    }
  }

  setValue = (element, value) => {
    if (element && value) {
      element.value = value || '';
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
      const label = elementFactory.getLabel(labelText);
      label.setAttribute('for', element.id);
      this.form.appendChild(label);
    }
  }

  setOptions = (element, options) => {
    if (options && Array.isArray(options)) {
      options.map(({ value, text }) =>
        element.appendChild(elementFactory.getOption(value, text)
      ))
    }
  }
}
