// apiScript.js     
const API_URL = 'https://icanhazdadjoke.com/';

let teste = '';

const fetchJoke = () => {
  const myObject = {
    method: 'GET',
    headers: { 'Accept': 'application/json' }
  };  
   let teste = fetch(API_URL, myObject)
    .then(response => response.json())
    .then(data => data.joke)
    return teste.then(teste2 => teste2);
};

window.onload = console.log(fetchJoke());