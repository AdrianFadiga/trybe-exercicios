Exercício 3

const btn = document.createElement('button');
btn.innerText = 'Click counter';
const clickCount = document.createElement('p');
clickCount.value = 0;
document.querySelector('body').appendChild(btn);
document.querySelector('body').appendChild(clickCount);
btn.addEventListener('click', () => {
  clickCount.value += 1;
  clickCount.innerText = clickCount.value;
});

Exercício 4:

const substituirX = (param) => {
  let xFinder = param.split('');
  for (let i = 0; i < xFinder.length; i += 1) {
    xFinder[i] === 'x' ? (xFinder[i] = 'Bebeto') : 'teyteytey';
  }
  return xFinder.join('');
};

console.log(substituirX('Tryber x aqui!'));

let skills = ['Javascript', 'HTML', 'CSS', 'React', 'Python'];

const generateString = () => {
  console.log(`${substituirX('Tryber x aqui!')} Minhas cinco principais habilidades são: ${skills.sort()}`)
}

generateString();


