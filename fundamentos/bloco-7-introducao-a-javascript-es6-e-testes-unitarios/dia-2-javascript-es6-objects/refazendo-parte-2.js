const lesson1 = {
  materia: 'Matemática',
  numeroEstudantes: 20,
  professor: 'Maria Clara',
  turno: 'manhã',
};

const lesson2 = {
  materia: 'História',
  numeroEstudantes: 20,
  professor: 'Carlos',
};

const lesson3 = {
  materia: 'Matemática',
  numeroEstudantes: 10,
  professor: 'Maria Clara',
  turno: 'noite',
};

//Ex 1
const addTurn = (object, key, value) => object[key] = value;

addTurn(lesson2, 'turno', 'noite');

//Ex 2:
const listKeys = (object) => Object.keys(object);

//Ex 3:
const objectLength = (object) => Object.keys(object).length;

//Ex 4:
const objectValues = (object) => Object.values(object);

//Ex 5:
const allLessons = Object.assign({}, {lesson1, lesson2, lesson3})

//Ex 6:
const studentsCounter = (object) => {
  let contador = 0;
  const lessonKeys = Object.keys(object);
  for (let i in lessonKeys) {
    contador += object[lessonKeys[i]].numeroEstudantes;
  }
  return contador;
}

//Ex 7:
const getValueByNumber = (object, position) => {
  object = Object.values(object);
  return object[position];
}

console.log(getValueByNumber(lesson1, 0))