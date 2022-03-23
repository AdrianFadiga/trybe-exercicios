let numbers = [5, 9, 3, 19, 70, 8, 100, 2, 35, 27];
let sumNumbers = 0;
let mediaAritmetica = 0;
let oddNumbers =[];
let umAteVinteCinco =[];
let divididoPorDois =[];
let maiorNumero = 0;
let menorNumero = numbers[0];

//ex 1
for (i = 0; i < numbers.length; i++) {
  console.log(numbers[i])
}

//ex 2
for (i = 0; i < numbers.length; i++) {
  sumNumbers += numbers[i]
}

console.log("A soma dos números é :" + sumNumbers);

//ex 3
mediaAritmetica = sumNumbers / numbers.length;
console.log ("A média aritmética é :" + mediaAritmetica);

//ex 4
if (mediaAritmetica > 20) {
  console.log("Valor maior que 20");
}
else {console.log("Valor menor ou igual a 20")}

//ex 5

for (i = 0; i < numbers.length; i++) {
  if (numbers[i] > maiorNumero) {
    maiorNumero = numbers[i];
  }
}
console.log("O maior número é: " + maiorNumero);

//ex 6

for (i = 0; i < numbers.length; i++) {
  if (numbers[i] % 2 !== 0) {
    oddNumbers.push(numbers[i])
  }
}

console.log("Os números ímpares são: " + oddNumbers);
console.log(oddNumbers.length);

//ex 7

for (i = 0; i < numbers.length; i++) {
  if (numbers[i] < menorNumero) {
    menorNumero = numbers[i];
  }
}
  console.log("O menor número é :" + menorNumero);

  //ex 8

for (i = 1; i <= 25; i++) {
  umAteVinteCinco.push(i);
}

console.log("Array de um até 25 :" + umAteVinteCinco);

//ex 9
for (i = 0; i < umAteVinteCinco.length; i++) {
  divididoPorDois.push(umAteVinteCinco[i] / 2)
}
console.log(divididoPorDois);