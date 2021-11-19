let body = document.querySelector('body')
let btnChangeBackgroundColor = document.getElementById('changeBackgroundColor');

// Add BackgroundColor:

btnChangeBackgroundColor.addEventListener('click', changeBackgroundColor);

function changeBackgroundColor (bgColor) {
  bgColor = document.getElementById('backgroundColor').value
  body.style.backgroundColor = bgColor
  localStorage.setItem("backgroundColor", bgColor);
}

// Add Text Color:

let btnChangeTextColor = document.getElementById('changeTextColor');
btnChangeTextColor.addEventListener('click', changeTextColor);

function changeTextColor (textColor) {
  textColor = document.getElementById('textColor').value;
  document.querySelector('.text').style.color = textColor
  localStorage.setItem('textColor', textColor)
}

//Change Font Size:

let btnChangeFontSize = document.getElementById('changeFontSize');
btnChangeFontSize.addEventListener('click', changeFontSize)

function changeFontSize (fontSize) {
  fontSize = document.getElementById('fontSize').value;
  document.querySelector('.text').style.fontSize = fontSize + 'px'
  localStorage.setItem('fontSize', fontSize)
}

//Change Font Family:

let btnChangeFontFamily = document.getElementById('changeFontFamily');
btnChangeFontFamily.addEventListener('click', changeFontFamily);

function changeFontFamily (fontFamily) {
  fontFamily = document.getElementById('fontFamily').value;
  document.querySelector('.text').style.fontFamily = fontFamily
  localStorage.setItem('fontFamily', fontFamily);
}

function initialize () {
  body.style.backgroundColor = localStorage.getItem('backgroundColor');
  document.querySelector('.text').style.color = localStorage.getItem('textColor');
  document.querySelector('.text').style.fontSize = localStorage.getItem('fontSize');
  document.querySelector('.text').style.fontFamily = localStorage.getItem('fontFamily');
}

initialize();