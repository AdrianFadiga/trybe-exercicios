// sum.test.js
const { test, expect } = require('@jest/globals');
const { sum, myRemove, myFizzBuzz } = require('./sum.js');

//Ex 1
describe('Testa a função sum', () => {
  test('Testa se o retorno de sum(4, 5) é 9', () => {
    expect(sum(4, 5)).toBe(9);
  });
  test('Teste se o retorno de sum(0, 0) é 0', () => {
    expect(sum(0, 0)).toBe(0);
  });
  test("Teste se a função sum lança um erro quando os parâmetros são 4 e '5'", () => {
    expect(() => sum(4, '5')).toThrowError();
  });
  test("Teste se a mensagem de erro é 'parameters must be numbers'", () => {
    expect(() => sum(4, '5')).toThrow('parameters must be numbers');
  });
});

//Ex 2
describe('Testa a função myRemove', () => {
  test('Verifique se a chamada myRemove([1, 2, 3, 4], 3', () => {
    expect(myRemove([1, 2, 3, 4], 3)).toEqual([1, 2, 4]);
  });
  test('Verifique se a chamada myRemove([1, 2, 3, 4], 3', () => {
    expect(myRemove([1, 2, 3, 4], 3)).not.toEqual([1, 2, 3, 4]);
  });

  test('Verifique se a chamada myRemove([1, 2, 3, 4], 5', () => {
    expect(myRemove([1, 2, 3, 4], 5)).toEqual([1, 2, 3, 4]);
  });
});

//Ex 3
describe('Testa a função myFizzBuzz', () => {
  test('Verifica se um número divisível por 3 e 5 retorna a string fizzbuzz', () => {
    expect(myFizzBuzz(15)).toBe('fizzbuzz');
  });
  test('Verifica se um número divisível por 3 retorna a string fizz', () => {
    expect(myFizzBuzz(9)).toBe('fizz');
  });
  test('Verifica se um número divisível por 5 retorna a string buzz', () => {
    expect(myFizzBuzz(5)).toBe('buzz');
  });
  test('Verifica se retorna falso caso o número não seja divisível por 3 e 5', () => {
    expect(myFizzBuzz(2)).toBe(2);
  });
  test('Verifica se uma chamada sem número retorna false', () => {
    expect(myFizzBuzz('tey')).toBe(false);
  })
});
