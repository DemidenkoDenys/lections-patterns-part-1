const form = document.createElement('form');

const name = document.createElement('input');
name.setAttribute('id', 'name-field');
name.setAttribute('type', 'text');
name.setAttribute('placeholder', 'enter your name');
form.appendChild(name);

const emailLabel = document.createElement('label');
emailLabel.textContent = 'email';
emailLabel.setAttribute('for', 'email-field');
form.appendChild(emailLabel);

const email = document.createElement('input');
email.setAttribute('id', 'email-field');
email.setAttribute('type', 'text');
email.setAttribute('placeholder', 'enter your name');
form.appendChild(email);

const phone = document.createElement('input');
phone.setAttribute('id', 'phone-field');
phone.setAttribute('type', 'text');
phone.setAttribute('value', '+38093000000');
phone.setAttribute('placeholder', 'enter phone');
form.appendChild(phone);

const city = document.createElement('select');
city.setAttribute('id', 'city-field');
city.setAttribute('type', 'text');
city.setAttribute('value', '');
city.setAttribute('placeholder', 'enter your name');

const option = document.createElement('option');
option.value = '';
option.text = 'Select city';
option.setAttribute('disabled', true);
option.setAttribute('selected', true);
city.appendChild(option);

const option1 = document.createElement('option');
option1.value = 'Kharkiv';
option1.text = 'Kharkiv';
city.appendChild(option1);

const option2 = document.createElement('option');
option2.value = 'Kyiv';
option2.text = 'Kyiv';
city.appendChild(option2);

const option3 = document.createElement('option');
option3.value = 'Lviv';
option3.text = 'Lviv';
city.appendChild(option3);

form.appendChild(city);

document.getElementById('form-wrapper').appendChild(form);