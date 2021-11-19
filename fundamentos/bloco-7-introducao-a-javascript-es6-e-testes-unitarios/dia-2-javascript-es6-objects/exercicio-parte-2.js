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
const changeLesson = (target, keyToAdd, keyValue) => {
  const newKey = keyToAdd
  target[newKey] = keyValue;
}

//Ex 2
const showObjectKeys = (object) => Object.keys(object);

//Ex 3
const showObjectLength = (object) => Object.keys(object).length;
//Ex 4
const showObjectValues = (object) => Object.values(object)

//Ex 5
const allLessons = Object.assign({}, {lesson1, lesson2, lesson3});

//Ex 6
// const studentNumber = ((object) => object.lesson1.numeroEstudantes + object.lesson2.numeroEstudantes + object.lesson3.numeroEstudantes;)
//Refazendo ex 6:
const studentCounter = (object) => {
  let counter = 0;
  console.log(array)
  for (index in array) {
    counter += object[array[index]].numeroEstudantes
  }
  return counter
}
console.log(studentCounter(allLessons))


//Ex 7
const keyValueFinder = (object, keyNumber) => {
  object = Object.values(object);
  return object[keyNumber]
  }

 //Ex 8 - não fiz - ganzado

//Ex 9
 