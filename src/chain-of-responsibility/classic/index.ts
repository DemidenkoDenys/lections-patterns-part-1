import ChainOfResponsibility from './chain-of-responsibility';

const check_10 = new ChainOfResponsibility(value => value < 10, 'less than 10');
const check_20 = new ChainOfResponsibility(value => value < 20, 'less than 20');
const check_30 = new ChainOfResponsibility(value => value < 30, 'less than 30');
const check_40 = new ChainOfResponsibility(value => value < 40, 'less than 40');
const check_50 = new ChainOfResponsibility(value => value < 50, 'less than 50');
const check_60 = new ChainOfResponsibility(value => value < 60, 'less than 60');
const check_70 = new ChainOfResponsibility(value => value < 70, 'less than 70');
const check_80 = new ChainOfResponsibility(value => value < 80, 'less than 80');
const check_90 = new ChainOfResponsibility(value => value < 90, 'less than 90');

check_10.setNext(check_20);
check_20.setNext(check_30);
check_30.setNext(check_40);
check_40.setNext(check_50);
check_50.setNext(check_60);
check_60.setNext(check_70);
check_70.setNext(check_80);
check_80.setNext(check_90);

check_10.run(58);
