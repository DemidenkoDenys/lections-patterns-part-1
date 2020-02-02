const Singleton = (function() {

  const instance = this;

  const privateMethod = () => 'hidden implementation';

  function Singleton() {
    if (instance) {
      return instance;
    }
  }

  Singleton.prototype.publicMethod = () => `${privateMethod()} was revealed`;

  return Singleton;
}());

export default Singleton;
