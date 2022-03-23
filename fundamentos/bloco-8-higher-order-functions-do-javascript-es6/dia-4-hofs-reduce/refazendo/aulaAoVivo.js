const numbers = [2, 5, 9, 15, 89, 0, 13, 3, 110];

const result = numbers.reduce((acc,curr) => acc + curr);
console.log(result);

const higherNumber = numbers.reduce((acc, curr) => {
  if (acc > curr) return acc;
  return curr;
});

