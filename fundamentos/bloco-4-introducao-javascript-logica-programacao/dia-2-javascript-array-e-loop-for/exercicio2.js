let numbers = [5, 9, 3, 19, 70, 8, 100, 2, 35, 27];
let multiplicacaoNumbers = [];

for (let i = 0; i < numbers.length; i++) {
  if (i + 1 < numbers.length) {
    multiplicacaoNumbers.push(numbers[i] * numbers[i+1]);
  } else {
    multiplicacaoNumbers.push(numbers[i] * 2);
  }
}
  console.log(multiplicacaoNumbers);