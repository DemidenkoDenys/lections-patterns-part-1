$('body')
  .find('form')
  .children()
  .filter($('input[type=text'))
  .addClass('touched');

