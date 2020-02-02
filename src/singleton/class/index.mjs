import Singleton from './singleton';

const singleton1 = Singleton.instance;
const singleton2 = Singleton.instance;

console.log(singleton1 === singleton2); // true

console.log(Singleton.instance === Singleton.instance); // true