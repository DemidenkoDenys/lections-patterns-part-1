import Singleton from './singleton';

const singleton1 = new Singleton();
const singleton2 = new Singleton();

console.log(singleton1 === singleton2); // true
console.log(new Singleton() === new Singleton()); // true

console.log(singleton2.publicMethod());

try {
  console.log(singleton2.privateMethod());
} catch(error) {
  console.log(error);
}