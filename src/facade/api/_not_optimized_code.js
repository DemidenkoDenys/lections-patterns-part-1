import fetch from 'node-fetch';
import FormData from 'form-data';

function getCountries(url) {
  const form = new FormData({
    'Content-Type': 'application/json',
    'Authorization': 'YWxhZGRpbjpvcGVuc2VzYW1l',
  });
  const headers = form.getHeaders();
  const options = { headers, method: 'GET' };
  return fetch(url, options).then(res => res.json());
};

getCountries('https://restcountries.eu/rest/v2/all')
  .then(countries => console.log(countries));