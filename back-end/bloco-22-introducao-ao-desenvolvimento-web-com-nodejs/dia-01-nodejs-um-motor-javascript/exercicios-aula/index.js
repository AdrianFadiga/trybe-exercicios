const { imcCalc } = require('./imc');

const readline = require('readline-sync');

const peso = readline.question('Qual o seu peso?\n R: ');

const altura = readline.question('Qual sua altura?\n R:');


console.log(imcCalc(peso, altura));
