const {question, questionInt} = require('readline-sync');

const name = question('Qual seu nome?');

const age = questionInt('Qual sua idade?');

console.log(`Oi bom dia ${name}! Voce tem ${age} anois de idade amori`);