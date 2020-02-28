import SettingsFlyweight from './settings.flyweight';

const flyWeight = new SettingsFlyweight();

console.log('\n', flyWeight.getAttributeByName('ATR_STAMP'));
console.log('\n', flyWeight.getAttributeByName('ATR_EARLY_START'));
console.log('\n', flyWeight.getAttributeByName('ATR_STAMP'));

console.log('\n', flyWeight.getAttributes());
