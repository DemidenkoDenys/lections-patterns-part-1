import UserFactory from './user.factory';

const userFactory = new UserFactory();


const author = userFactory.createAuthor('Denys', 'Demidenko', 'STRONG_PASSWORD');
console.log(author);
author.publishArticle();


// const editor = userFactory.createEditor('Denys', 'Demidenko', 'STRONG_PASSWORD');
// console.log(editor);
// editor.approveComment();


// const reader = userFactory.createReader('Denys', 'Demidenko');
// console.log("TCL: reader", reader);
// reader.openArticle();
