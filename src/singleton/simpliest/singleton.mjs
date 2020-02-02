const Singleton = (function() {
  let instance;
  return function() {
    if (!instance) {
      instance = this;
    }
    return instance;
  };
})();

export default Singleton;
