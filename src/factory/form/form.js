const factory = new FormFactory();

factory.addField('text', {
  name: 'name',
  placeholder: 'enter your name',
});

factory.addField('number', {
  min: 1,
  max: 20,
  name: 'experience',
  label: 'Experience',
  placeholder: 'enter your experience in years',
});

factory.addField('text', {
  name: 'email',
  label: 'Email',
  placeholder: 'enter your email',
});

factory.addField('password', {
  name: 'password',
  label: 'Password',
  value: '',
  placeholder: 'enter your password',
});

factory.addField('select', {
  name: 'city',
  label: 'Select city',
  options: [
    { value: 'kharkiv', text: 'Kharkiv' },
    { value: 'kyiv', text: 'Kyiv' },
    { value: 'lviv', text: 'Lviv' },
  ]
});

document.getElementById('form-wrapper').appendChild(factory.form);