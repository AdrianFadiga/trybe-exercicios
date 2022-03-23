const firstLi = document.getElementById('first-li');
const secondLi = document.getElementById('second-li');
const thirdLi = document.getElementById('third-li');
const input = document.getElementById('input');
const myWebpage = document.getElementById('my-spotrybefy');




let elementLi = document.querySelectorAll('li'); 

function liberandoOClick () {
  for (let i = 1; i < 3; i += 1) {
  elementLi[i].addEventListener("click", addTech);
  }
}

liberandoOClick ();

function addTech (eventoDeOrigem) {
  for (let i = 1; i < 3; i+=1)
  if (eventoDeOrigem.target === elementLi[i]) {
  elementLi[i].className = 'tech'
}
}


let inputText = document.querySelector('#input');
inputText.addEventListener("input", changeText)

function changeText () {
  let classes = document.querySelector('.tech');
  classes.innerHTML = 'hoje tu vai se dar bem pae'

}

let spotrybefy = document.querySelector('#my-spotrybefy');
spotrybefy.addEventListener('dblclick', redirect);

let elementH3 = document.querySelector('h3');
elementH3.addEventListener('mouseover', changeBackground);

function changeBackground () {
  elementH3.style.color = 'red'
  
}


function redirect () {
window.location = 'http://google.com'
}





// 5. Crie uma função que, ao passar o mouse sobre 'Meu top 3 do Spotrybefy', altere
// a cor do mesmo;
