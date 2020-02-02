import decorator from './decorator';


const SUCCESS_MESSAGE = 'Super, you have Succeeded !!!';
const WARNING_MESSAGE = 'Attention, it\'s better to do with another way !!!';
const ERROR_MESSAGE = 'Sorry, it\'s error here !!!';


console.log(decorator.success(SUCCESS_MESSAGE), '\n');
console.log(decorator.warning(WARNING_MESSAGE), '\n');
console.log(decorator.error(ERROR_MESSAGE), '\n');
