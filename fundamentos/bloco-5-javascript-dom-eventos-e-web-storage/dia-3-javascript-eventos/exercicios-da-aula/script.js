function createDaysOfTheWeek() {
  const weekDays = ['Domingo', 'Segunda', 'Terça', 'Quarta', 'Quinta', 'Sexta', 'Sábado']
  const weekDaysList = document.querySelector('.week-days');
  

  for (let index = 0; index < weekDays.length; index += 1) {
    const days = weekDays[index];
    const dayListItem = document.createElement('li');
    dayListItem.innerHTML = days;

    weekDaysList.appendChild(dayListItem);
  };
};

createDaysOfTheWeek();

// Escreva seu código abaixo.
//Exercício 1
const dezDaysList = [29, 30, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24, 25, 26, 27, 28, 29, 30, 31];
let ulDays = document.getElementById('days');



function addDays () {
for (let i = 0; i < dezDaysList.length; i+=1) {
  const elementLi = document.createElement('li');
  elementLi.innerHTML = dezDaysList[i];
  if (elementLi.innerText.includes('24') || elementLi.innerText.includes('31')) {
    elementLi.className = 'day holiday'
  }
  else if (elementLi.innerText == 4 || elementLi.innerText.includes('11') || elementLi.innerText.includes('18')) {
    elementLi.className = 'day friday'
  } else if (elementLi.innerText.includes('25')) {
    elementLi.className = 'day holiday friday'
  }
  else {elementLi.className = 'day'}
  ulDays.appendChild(elementLi);
}
}
addDays();

//Exercício 2:

let buttonFeriados = document.createElement('button');

function addHolidayButton () {
  buttonFeriados.id = 'btn-holiday';
  buttonFeriados.type = 'Feriados';
  buttonFeriados.innerText = 'Feriados'
  document.querySelector('.buttons-container').appendChild(buttonFeriados);
}
addHolidayButton();


// Exercício 3:

buttonFeriados.addEventListener('click', changeBackgroundHoliday);

function changeBackgroundHoliday () {
  let holidays = document.querySelectorAll('.holiday');
  for (let i = 0; i < holidays.length; i+=1){
    if (holidays[i].style.backgroundColor !== 'red') {
    holidays[i].style.backgroundColor = 'red'
    }
    else {holidays[i].style.backgroundColor = 'rgb(238,238,238)'}
  }
}

//Exercício 4:

let fridayButton = document.createElement('button');

function addFridayButton () {
  fridayButton.id = 'btn-friday';
  fridayButton.innerText = 'Sexta-feira'
  document.querySelector('.buttons-container').appendChild(fridayButton);
}

addFridayButton();

//Exercício 5:

fridayButton.addEventListener('click', fridayDaysModifier)

function fridayDaysModifier() {
  let fridayDays = document.querySelectorAll('.friday');
  for (let i = 0; i < fridayDays.length; i+=1) {
    if (fridayDays[i].style.color !== 'blue') {
    fridayDays[i].style.color = 'blue';
  }
  else {fridayDays[i].style.color = '#777'}
}
}

// Exercício 6:

let days = document.querySelectorAll('.day');
for (let i = 0; i < days.length; i+=1) {
days[i].addEventListener('mouseover', addZoom);
days[i].addEventListener('mouseout', removeZoom);
days[i].addEventListener('click', changeDayColor);
}

function addZoom (objetoDoEvento) {
  for (let i = 0; i < days.length; i+=1){
    if (days[i] === objetoDoEvento.target && days[i].style.fontSize !== '30px') {
    days[i].style.fontSize = '30px'
  }
}
}

function removeZoom () {
  for (let i = 0; i < days.length; i+=1) {
    days[i].style.fontSize = '';
  }
}

// Exercício 7:

let tarefaPersonalizada = document.createElement('span');
function addTarefa () {
  tarefaPersonalizada.innerText = 'cozinhar';
  document.querySelector('.my-tasks').appendChild(tarefaPersonalizada);
}

addTarefa();

//Exercício 8:

let legenda = document.createElement('div');

function addLegenda () {
  legenda.className = 'task';
  legenda.innerHTML = 'green';
  legenda.style.backgroundColor = legenda.innerHTML;
  document.querySelector('.my-tasks').appendChild(legenda);
}

addLegenda();

//Exercício 9:

legenda.addEventListener('click', taskSelected);

function taskSelected () {
  if (legenda.className !== 'task selected') {
  legenda.className = 'task selected'}
  else {legenda.className = 'task'}
}

//Exercício 10:

function changeDayColor (objetoDoEvento) {
  let alvo = objetoDoEvento.target;
  if (alvo.style.color !== legenda.style.backgroundColor){
  alvo.style.color = legenda.style.backgroundColor;}
  else {alvo.style.color = 'rgb(119,119,119)'}

}







