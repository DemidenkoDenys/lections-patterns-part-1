import * as request from 'request-promise-native';
import Subject from './observer';

const subject = new Subject();

function observerLog(value) {
  console.log('first observer received data - ' + value + '\n');
}

async function observerApi(value) {
  console.log('making api request with parameter: ' + value);
  const result = await request.get(`https://api.crossref.org/works?rows=1&query.author=${value}`);
  console.log(result);
}

subject.addObserver(observerLog);
subject.addObserver(observerApi);

console.log('example has run (after 3 seconds Subject will notify all observers):\n');

setTimeout(() => {
  subject.notifyAll('author');
}, 3000);

