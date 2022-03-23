let teste = [2, 4, 6, 7, 10, 0, -3];


function findLowestIndex (parameter) {
  let lowestNumber = '';
  let lowestIndex = '';
  for (i = 0; i <= teste.length; i++) {
    if (teste[i] < lowestNumber) {
      lowestNumber = teste[i];
      lowestIndex = i;
    }
  }
  return lowestIndex;
}

console.log(findLowestIndex(teste));

