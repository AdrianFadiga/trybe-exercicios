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

const dezDaysList = [29, 30, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24, 25, 26, 27, 28, 29, 30, 31];
let ulDays = document.getElementById('days');




for (let i = 0; i < dezDaysList.length; i+=1) {
  const elementLi = document.createElement('li');
  elementLi.innerHTML = dezDaysList[i];
  if (elementLi.innerText.includes('24') || elementLi.innerText.includes('25') || elementLi.innerText.includes('31')) {
    elementLi.className = 'day holiday'
  }
  else if (elementLi.innerText == 4 || elementLi.innerText.includes('11') || elementLi.innerText.includes('18') || elementLi.innerText.includes('25')) {
    elementLi.className = 'day friday'
  } else {elementLi.className = 'day'}
  ulDays.appendChild(elementLi);
}

console.log(ulDays);









//Primeiro criar o elemento li
//Adicionar o elemento li aos dias