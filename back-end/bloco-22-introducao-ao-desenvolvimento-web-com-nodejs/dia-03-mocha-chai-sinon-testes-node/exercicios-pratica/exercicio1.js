const calculaSituacao = (num) => {
    if (typeof(num) !== 'number') {
        return 'Informa um número ae ow';
    }
    if (num > 0) {
        return 'Positivo';
    };
    if (num < 0) {
        return 'Negativo';
    };
    if (num === 0) {
        return 'Neutro';
    };
};


module.exports = calculaSituacao;