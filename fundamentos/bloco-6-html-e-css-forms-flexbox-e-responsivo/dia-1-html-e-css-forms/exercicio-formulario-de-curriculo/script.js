let arrayEstados = ['Acre', 'Alagoas', 'Amapá', 'Amazonas', 'Bahia', 'Ceará', 'Distrito Federal', 'Espírito Santo', 'Goiás', 'Maranhão', 'Mato Grosso', 'Minas Gerias', 'Pará', 'Paraíba', 'Paraná', 'Piauí', 'Rio de Janeiro', 'Rio Grande do Norte', 'Rondônia', 'Roraima', 'Santa Catarina', 'São Paulo', 'Sergipe', 'Tocantins'];

function addEstados () {
  for (let i = 0; i < arrayEstados.length; i+=1){
    let elementoOption = document.createElement('option');
    elementoOption.innerHTML = arrayEstados[i];
    document.getElementById('estados').appendChild(elementoOption);
  }
}

addEstados();

let elementSection = document.querySelectorAll('section');
function addBorder () {
  for (let i = 0; i < elementSection.length; i += 1) {
    elementSection[i].classList.add('border')
  }
}

addBorder();

