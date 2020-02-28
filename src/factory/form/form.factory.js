class FormFactory {

  form;
  elementFactory;

  constructor() {
    this.elementFactory = new ElementFactory();
    this.form = this.elementFactory.form;
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

  addInputText = ({ name, value, placeholder, label }) => {
    const field = this.elementFactory.inputText;

    field.name = name;
    field.value = value || '';

    this.setId(field, this.getFieldId(name));
    this.setLabel(field, label);
    this.setPlaceholder(field, placeholder);

    this.form.appendChild(field);
  }

  addInputPassword = ({ name, value, placeholder, label }) => {
    const field = this.elementFactory.inputPassword;

    field.name = name;
    field.value = value || '';

    this.setId(field, this.getFieldId(name));
    this.setLabel(field, label);
    this.setPlaceholder(field, placeholder);

    this.form.appendChild(field);
  }

  addInputNumber = ({ name, value, placeholder, label, min, max }) => {
    const field = this.elementFactory.inputNumber;

    field.name = name;
    field.value = value || min || 0;

    this.setId(field, this.getFieldId(name));
    this.setMin(field, min);
    this.setMax(field, max);
    this.setLabel(field, label);
    this.setPlaceholder(field, placeholder);

    this.form.appendChild(field);
  }

  addSelect = ({ name, label, options }) => {
    const select = this.elementFactory.select;

    this.setId(select, this.getFieldId(name));
    this.setLabel(select, label);
    this.setOptions(select, options);

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
}
