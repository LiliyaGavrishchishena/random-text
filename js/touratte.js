'use strict';

const authorsList = [
  {
    _id: 1,
    name: 'Todd'
  },
  {
    _id: 3,
    name: 'Rob'
  },
  {
    _id: 3,
    name: 'Sevil'
  }
];

let activeAuthor = 0;

const chatElement = document.querySelector('#chat');
let randomAuthor = Math.floor(Math.random() * authorsList.length);

console.log(authorsList[randomAuthor]);
let randomText = Math.random()
  .toString(36)
  .substr(2, 15);
console.log(randomText);
