const factory = new FormFactory();

factory.addField({
  type: 'text',
  name: 'name',
  placeholder: 'enter your name',
});

factory.addField({
  type: 'number',
  min: 1,
  max: 20,
  name: 'experience',
  label: 'Experience',
  placeholder: 'enter your experience in years',
});

factory.addField({
  type: 'text',
  name: 'email',
  label: 'Email',
  placeholder: 'enter your email',
});

factory.addField({
  type: 'text',
  name: 'phone',
  label: 'Phone',
  value: '+38093000000',
  placeholder: 'enter your phone',
});

factory.addField({
  type: 'select',
  name: 'city',
  label: 'Select city',
  options: [
    { value: 'kharkiv', text: 'Kharkiv' },
    { value: 'kyiv', text: 'Kyiv' },
    { value: 'lviv', text: 'Lviv' },
  ]
});

document.getElementById('form-wrapper').appendChild(factory.form);