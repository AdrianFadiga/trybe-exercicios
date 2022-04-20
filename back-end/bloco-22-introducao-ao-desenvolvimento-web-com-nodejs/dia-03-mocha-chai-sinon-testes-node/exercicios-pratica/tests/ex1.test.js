const { expect } = require('chai');
const calculaSituacao = require('../exercicio1.js');

describe('Função do exercício 1', () => {
    describe('Testa se retorna Positivo caso o número passado seja > 0', () => {
        const resposta = calculaSituacao(5)
        it('Testa o retorno da função caso o parametro seja maior que 0', () => {
            expect(resposta).to.equal('Positivo');
            expect(resposta).to.be.a('string');

        });
    });
    describe('Testa se retorna Negativo caso o número seja menor que 0', () => {
        const resposta = calculaSituacao(-5)
        it('Testa o retorno da função caso o parâmetro seja -5', () => {
            expect(resposta).to.equal('Negativo');
            expect(resposta).to.be.a('string');
        });
    });
    describe('Testa se retorna neutro caso o número seja 0', () => {
        const resposta = calculaSituacao(0)
        it('testa o retorno da função', () => {
            expect(resposta).to.equal('Neutro');
        });
        it('Testa se o retorno é uma string', () => {
            expect(resposta).to.be.a('string');
        });
    });
    describe('Testa o retorno caso o parâmetro da função não seja um número', () => {
        const resposta = calculaSituacao('Oi, bom dia')
        it('sei lá cara', () => {
            expect(resposta).to.equal('Informa um número ae ow');
        });
    });
});