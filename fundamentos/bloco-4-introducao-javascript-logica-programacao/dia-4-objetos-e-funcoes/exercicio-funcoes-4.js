let teste = ['José', 'Lucas', 'Nádia', 'Fernanda', 'Cairo', 'Joana'];
let nomeSeparado = '';
let maiorNomeSeparado = '';
let contadorLetras = '';
let maiorNomeJunto = '';


function biggestNameFinder (parameter) {
  for (i = 0; i < teste.length; i++) {
    nomeSeparado = teste[i].split('');
    if (nomeSeparado.length > teste.length) {
      maiorNomeSeparado = nomeSeparado
    }
  }
  maiorNomeJunto = maiorNomeSeparado.join('');
  return maiorNomeJunto;
}

console.log(biggestNameFinder(teste));
