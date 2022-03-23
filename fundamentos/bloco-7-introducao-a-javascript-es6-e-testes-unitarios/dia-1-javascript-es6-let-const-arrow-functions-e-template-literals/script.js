const fatorial = (number) => {
  let numberArray = [];
  let result = 1;
  for (let i = number; i >= 1; i -= 1) {
    numberArray.push(i);
  }
  for (let i = 0; i < numberArray.length; i += 1) {
    result *= numberArray[i];
  }
  console.log(result);
};

fatorial(5);

// Exercício 2:

const biggerWordFinder = (param) => {
  let paramSplit = param.split(' ');
  let biggerWord = '';
  for (let i = 0; i < paramSplit.length; i+= 1) {
    (paramSplit[i].length > biggerWord.length) ? biggerWord = paramSplit[i] : 'qqr coisa p funfar o ternary operator'
  }
  console.log(biggerWord)
}

biggerWordFinder('Aliqua elit commodo ex elit esse.')

// Exercício 3:

