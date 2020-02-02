let singleton = Symbol();
let singletonEnforcer = Symbol();

export default class Singleton {

  constructor(enforcer) {
    if (enforcer !== singletonEnforcer) {
       throw "Instantiation failed: instance getter instead of new Singleton()";
    }
  }

  static get instance() {
    if (!this[singleton]) {
      this[singleton] = new Singleton(singletonEnforcer);
    }
    return this[singleton];
  }
  
  static set instance(_) {
    throw "Can't change constant property!";
  }
}
