const fieldsParams = [
  {
    type: 'text',
    name: 'name',
    label: 'Name'
  },
  {
    type: 'number',
    name: 'experience',
    min: 1,
    max: 20,
  },
  {
    type: 'text',
    name: 'email',
    placeholder: 'Enter your email',
  },
  {
    type: 'password',
    name: 'password',
    value: '1234567',
  },
  {
    type: 'select',
    name: 'city',
    label: 'Select city',
    options: [
      { value: 'kharkiv', text: 'Kharkiv' },
      { value: 'kyiv', text: 'Kyiv' },
      { value: 'lviv', text: 'Lviv' },
    ]
  }
];

const formFactory = new FormFactory(fieldsParams);
const form = formFactory.getForm();

document.getElementById('form-wrapper').appendChild(form);
