// -----------------------------------------------------
$('#container');
// -----------------------------------------------------
document.getElementById('container');                   


// -----------------------------------------------------
$('#container').find('li');
// -----------------------------------------------------
document
  .getElementById('container')
  .getElementsByTagName('li');                          


// -----------------------------------------------------
$('a').on('click', fn);
// -----------------------------------------------------
[].forEach.call(
  document.querySelectorAll('a'), el => fn()
);                                                      


// -----------------------------------------------------
$('ul').on('click', 'a', fn);
// -----------------------------------------------------
var matches;
(function(doc) {
  matches =
    doc.matchesSelector ||
    doc.webkitMatchesSelector ||
    doc.mozMatchesSelector ||
    doc.oMatchesSelector ||
    doc.msMatchesSelector;
})(document.documentElement);
document.addEventListener('click', e => {
  if (matches.call(e.target, 'ul a') ) {
    fn();
  }
}, false);                                              


// -----------------------------------------------------
$('#list').next();
// -----------------------------------------------------
var list = document.getElementById('list'),
    next = list.nextSibling;
while (next.nodeType > 1) {
  next = next.nextSibling;
}                                                       


// -----------------------------------------------------
$('<div id=box></div>').appendTo('body');
// -----------------------------------------------------
var div = document.createElement('div');
    div.id = 'box';
document.body.appendChild(div);                         


// -----------------------------------------------------
$('.box').css('color', 'red');
// -----------------------------------------------------
var element = document.querySelectorAll('.box');
[].forEach.call(element, el => {
  el.style.color = 'red';
});                                                     


// -----------------------------------------------------
$()
// -----------------------------------------------------
if (!document.getElementsByClassName) {

  document.getElementsByClassName = function(cl, tag) {
    var els,
        len,
        i = 0,
        matches = [],
        regex = new RegExp('(?:\\s|^)' + cl + '(?:\\s|$)');
        els = document.getElementsByTagName(tag || "*");

    if (!els[0]) return false;

    for (len = els.length; i < len; i++) {
      if (els[i].className.match(regex)) {
        matches.push(els[i]);
      }
    }
    return matches;
  };
}
  

var $ = function(el, tag) {
  var firstChar = el.charAt(0);

  if (document.querySelectorAll) {
    return document.querySelectorAll(el);
  }

  switch (firstChar) {
    case "#":
      return document.getElementById(el.slice(1));
    case ".":
      return document.getElementsByClassName(el.slice(1), tag);
    default:
      return document.getElementsByTagName(el);
  }
};