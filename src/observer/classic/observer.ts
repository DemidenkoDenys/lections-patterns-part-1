class Subject {

  observers = [];

  constructor() {}

  addObserver(observer) {
    this.observers.push(observer);
  }

  notifyAll(data) {
    this.observers.forEach(observer => observer(data));
  }
}

export default Subject;
