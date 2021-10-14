let numbers = [5, 9, 3, 19, 70, 8, 100, 2, 35, 27];
let sumNumbers = 0;
let arithmeticAverage = 0;
let higherNumber = 0;
let oddNumbers = [];
let smallestNumber = numbers[0];
let oneToTwentyFive = [];
let dividedByTwo = [];

console.log(numbers);

for (i = 0; i < numbers.length; i++) {
  sumNumbers += numbers[i];

}

console.log("A soma dos números é: " + sumNumbers);

arithmeticAverage = (sumNumbers / numbers.length);

console.log("A média aritmética é: " + arithmeticAverage);

if (arithmeticAverage > 20) {
  console.log ("Valor maior que 20");
} else {
  console.log("Valor menor ou igual a 20")
}

for (i = 0; i < numbers.length; i++) {
  if (higherNumber < numbers[i]) {
    higherNumber = numbers[i]
  }
}

console.log("O maior número é :" + higherNumber);

for (i = 0; i < numbers.length; i++) {
  if (numbers[i] % 2 !== 0) {
    oddNumbers.push(numbers[i]);
  }
}

console.log("Os números ímpares são: " + oddNumbers);

for (i = 0; i < numbers.length; i++) {
  if (smallestNumber > numbers[i]) {
    smallestNumber = numbers[i]
  }
}

console.log("O menor número é: " + smallestNumber);

for (i = 0; i <= 25; i++) {
  oneToTwentyFive.push(i);
}

console.log(oneToTwentyFive);

console.log();

for (i = 0; i < oneToTwentyFive.length; i++) {
  dividedByTwo.push(oneToTwentyFive[i] / 2)
}

console.log(dividedByTwo);
