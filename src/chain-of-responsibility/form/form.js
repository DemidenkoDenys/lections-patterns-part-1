const fieldsParams = [
  {
    type: 'text',
    name: 'name',
    label: 'Name',
    placeholder: 'enter your name',
  },
  {
    type: 'number',
    min: 1,
    max: 20,
    name: 'experience',
    label: 'Experience',
    placeholder: 'enter your experience in years',
  },
  {
    type: 'text',
    name: 'email',
    label: 'Email',
    placeholder: 'enter your email',
  },
  {
    type: 'password',
    name: 'password',
    label: 'Password',
    value: '',
    placeholder: 'enter your password',
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
  }
];

const formFactory = new FormFactory(fieldsParams);
const form = formFactory.getForm();

const validator = new ChainValidator(form);
validator.chain = [
  {
    name: 'email',
    strategy: emailSoftStrategy,
  },
  {
    name: 'name',
    strategy: requiredStrategy,
  },
  {
    name: 'password',
    strategy: passwordSoftStrategy,
  },
  {
    name: 'password',
    strategy: passwordStrictStrategy,
  },
  {
    name: 'experience',
    strategy: rangeStrategy,
  }
];

document.getElementById('form-wrapper').appendChild(form);


// TODO - Quest 6 - implement chain setting through builder pattern to reach this initialize form:

// validator
//   .setValidator('email', emailSoftStrategy)
//   .setValidator('name', requiredStrategy)
//   .setValidator('password', passwordSoftStrategy)
//   .setValidator('password', passwordStrictStrategy)
//   .setValidator('experience', rangeStrategy)
