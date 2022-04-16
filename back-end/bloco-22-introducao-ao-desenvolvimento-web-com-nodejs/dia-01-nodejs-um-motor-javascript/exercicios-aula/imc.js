const imcCalc = (peso, altura) => {
    return Math.round(peso / (altura * altura));
};

module.exports = {
    imcCalc,
}