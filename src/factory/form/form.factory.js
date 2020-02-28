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
    this.setMin(field, min);
    this.setMax(field, max);
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


  // QUEST 3 - implement setPlaceholder function
  // QUEST 4 - create decorators for functions below

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
