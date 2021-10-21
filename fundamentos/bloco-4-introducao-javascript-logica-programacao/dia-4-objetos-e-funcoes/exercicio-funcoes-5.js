let teste = [2, 3, 2, 5, 8, 2, 3];
let teste2 = teste;
let mostRepeatedNumber = '';
let numberOfRepetitions = '';
let contador = 0;
let contadorDois = 0;

/* Passo a passo
Descobrir qual o número que mais se repete
Verificar quantas vezes um determinado valor aparece na array;
Para cada vez que aquele valor aparecer na array, adicionar +1 ao contador;
Retorna o valor da string que possui maior número no contador;
*/


for (i = 0; i < teste.length; i++) {
  for (j = i+1; j < teste2.length; j++) {
    if (teste[i] == teste2[j]) {
      contador = contador + 1;
    }
  }
}

console.log(contador)
console.log(contadorDois)