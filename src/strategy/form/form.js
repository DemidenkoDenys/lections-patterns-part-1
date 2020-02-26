const factory = new FormFactory();
const validations = new ValidationStrategy();

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
  validation: validations.requiredStrategy
});

factory.addField('text', {
  name: 'email',
  label: 'Email',
  placeholder: 'enter your email',
  validation: validations.emailStrictStrategy
});

factory.addField('password', {
  name: 'password',
  label: 'Password',
  value: '',
  placeholder: 'enter your password',
  validation: validations.passwordSoftStrategy
});

factory.addField('select', {
  name: 'city',
  label: 'Select city',
  options: [
    { value: 'kharkiv', text: 'Kharkiv' },
    { value: 'kyiv', text: 'Kyiv' },
    { value: 'lviv', text: 'Lviv' },
  ],
  validation: validations.requiredStrategy
});

document.getElementById('form-wrapper').appendChild(factory.form);

console.log(document.forms[0].elements[0].name);