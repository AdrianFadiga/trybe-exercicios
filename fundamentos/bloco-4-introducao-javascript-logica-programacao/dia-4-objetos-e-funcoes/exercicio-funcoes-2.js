let teste = [2, 3, 6, 7, 10, 1];
let higherNumber = '';
let higherIndex = '';

function maiorIndice (parameter) {
  for (i = 0; i <= teste.length; i++) {
    if (teste[i] > higherNumber) {
    higherNumber = teste[i];
    higherIndex = i
    }
  }
  return higherIndex;
};

maiorIndice(teste);
console.log(maiorIndice(teste));