const rangeStrategy = value => value > 1 && value < 20;
const requiredStrategy = value => !!value;
const emailSoftStrategy = value => value.includes('@') && value.includes('.');
const emailStrictStrategy = value => /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(value);
const passwordSoftStrategy = value => value.length > 6;
const passwordStrictStrategy = value => /^(?=.*[A-Za-z])(?=.*\d)(?=.*[@$!%*#?&])[A-Za-z\d@$!%*#?&]{8,}$/.test(value); // Minimum eight characters, at least one letter, one number and one special character;


const fieldsParams = [
  {
    type: 'text',
    name: 'name',
    label: 'Name',
    placeholder: 'enter your name',
    validation: requiredStrategy,
  },
  {
    type: 'number',
    min: 1,
    max: 20,
    name: 'experience',
    label: 'Experience',
    placeholder: 'enter your experience in years',
    validation: rangeStrategy,
  },
  {
    type: 'text',
    name: 'email',
    label: 'Email',
    placeholder: 'enter your email',
    validation: emailSoftStrategy,
  },
  {
    type: 'password',
    name: 'password',
    label: 'Password',
    value: '',
    placeholder: 'enter your password',
    validation: passwordSoftStrategy,
  },
  {
    type: 'select',
    name: 'city',
    label: 'Select city',
    options: [
      { value: 'kharkiv', text: 'Kharkiv' },
      { value: 'kyiv', text: 'Kyiv' },
      { value: 'lviv', text: 'Lviv' },
    ],
    validation: requiredStrategy,
  }
];

const formFactory = new FormFactory(fieldsParams);
const form = formFactory.getForm();

const validator = new Validator(form);
validator.setValidations(fieldsParams);

document.getElementById('form-wrapper').appendChild(form);

// TODO - Quest 5 - add message to strategy and display it under the field if field not valid.