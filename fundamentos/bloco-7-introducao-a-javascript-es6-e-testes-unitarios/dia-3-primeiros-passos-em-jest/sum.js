function sum(a, b) {
  if (typeof a !== 'number' || typeof b !== 'number') {
    throw new Error('parameters must be numbers');
  }

  return a + b;
}

function myRemove(arr, item) {
  let newArr = [];
  for (let index = 0; index < arr.length; index += 1) {
    if (item !== arr[index]) {
      newArr.push(arr[index]);
    }
  }
  return newArr;
}

function myFizzBuzz(num) {
  if (typeof num !== 'number') return false;
  if (num % 3 === 0 && num % 5 === 0) return 'fizzbuzz';
  if (num % 3 === 0) return 'fizz';
  if (num % 5 === 0) return 'buzz';
  return num;
}

const encode = (param) => {
  param = param.split('');
  for (let i = 0; i < param.length; i+= 1) {
    if (param[i] === 'a') {param[i] = 1};
    if (param[i] === 'e') {param[i] = 2};
    if (param[i] === 'i') {param[i] = 3};
    if (param[i] === 'o') {param[i] = 4};
    if (param[i] === 'u') {param[i] = 5};

  }
  return param.join('');
}

const decode = (param) => {
  param = param.split('');
  for (let i = 0; i < param.length; i+= 1) {
    if (param[i] == 1) {param[i] = 'a'};
    if (param[i] == 2) {param[i] = 'e'};
    if (param[i] == 3) {param[i] = 'i'};
    if (param[i] == 4) {param[i] = 'o'};
    if (param[i] == 5) {param[i] = 'u'};
  }
  return param.join('');
};

const techList = (tech, name) => {


}

console.log(techList(['CSS', 'Jest', 'HTML', 'CSS', 'JavaScript'], 'Adrian'));

module.exports = { sum, myRemove, myFizzBuzz, encode, decode }