const newRegister = (nomeCompleto) => {
  const email = `${nomeCompleto
    .replaceAll(' ', '_')
    .toLowerCase()}@betrybe.com.br`;
  return { name: nomeCompleto, email };
};

const newEmployees = () => {
  const employees = {
    id1: newRegister('Pedro Guerra'), // Nome: Pedro Guerra -> Chame sua função passando o nome Pedro Guerra como parâmetro, substituindo as aspas
    id2: newRegister('Luiza Drumond'), // Nome: Luiza Drumond -> Chame sua função passando o nome Luiza Drumond como parâmetro, substituindo as aspas
    id3: newRegister('Carla Paiva'), // Nome: Carla Paiva -> Chame sua função passando o nome Carla Paiva como parâmetro, substituindo as aspas
  };
  return employees;
};

//Ex 2:

const drawResult = (betNumber, result) => {
  if (betNumber === result) {
    return `Parabéns, você ganhou!`;
  } else {
   return `Tente novamente!`;
  }
};

function getRandomIntInclusive(min, max) {
  min = Math.ceil(min);
  max = Math.floor(max);
  return Math.floor(Math.random() * (max - min + 1)) + min;
}

//Ex 3:

const RIGHT_ANSWERS = ['A', 'C', 'B', 'D', 'A', 'A', 'D', 'A', 'D', 'C'];
const STUDENT_ANSWERS = ['A', 'N.A', 'B', 'D', 'A', 'C', 'N.A', 'A', 'D', 'B'];





const corretor = (template, studentAnswers) => {
  let counter = 0;
  for (let i = 0; i <= template.length; i += 1) {
    if (template[i] === studentAnswers[i]) {
      counter += 1;}
      else if (template[i] !== studentAnswers[i]) {
        counter -= 0,5;
      }
    }
    return counter;
  };

console.log(corretor(RIGHT_ANSWERS, STUDENT_ANSWERS));

const rightAnswerCounter = (gabarito, studentAnswers, callback) => {
  let rightAnswerCounter = 0;
  for (let i = 0; i < gabarito.length; i += 1) {
    if (gabarito[i] === studentAnswers[i]) {
      rightAnswerCounter += 1};
  }
  return rightAnswerCounter
};

console.log(rightAnswerCounter(RIGHT_ANSWERS, STUDENT_ANSWERS))
