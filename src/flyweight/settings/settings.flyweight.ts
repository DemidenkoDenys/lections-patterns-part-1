import settings from './settings.json';

export default class SettingsFlyweight {

  attributes = {};

  constructor() {}

  getAttributeByName(name) {
    if (!this.attributes[name]) {
      this.attributes[name] = settings.find(set => set.name === name);
    }
    return this.attributes[name];
  }

  getAttributes() {
    return this.attributes;
  }

}
