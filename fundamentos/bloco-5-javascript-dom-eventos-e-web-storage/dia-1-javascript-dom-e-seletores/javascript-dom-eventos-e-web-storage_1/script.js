        /*
        Aqui você vai modificar os elementos já existentes utilizando apenas as funções:
        - document.getElementById()
        - document.getElementsByClassName()
        - document.getElementsByTagName()
 Crie uma função que mude o texto na tag <p> para uma descrição de como você se vê daqui a 2 anos. (Não gaste tempo pensando no texto e sim realizando o exercício)
 Crie uma função que mude a cor do quadrado amarelo para o verde da Trybe (rgb(76,164,109)).
 Crie uma função que mude a cor do quadrado vermelho para branco.
 Crie uma função que corrija o texto da tag <h1>.
 Crie uma função que modifique todo o texto da tag <p> para maiúsculo.
 Crie uma função que exiba o conteúdo de todas as tags <p> no console.
        */


 function futureMe () {
      let paragraph = document.getElementsByTagName('p')[1];
      paragraph.innerHTML = 'Dev brabo demais ganhando um din dahora comendo varias morando num pico massa'  
 }

 futureMe();

function toGreenSquare () {
       let greenSquare = document.getElementsByClassName('main-content')[0];
       greenSquare.style.backgroundColor = 'rgb(76,164,109)'
}

toGreenSquare();

function correctText () {
       let rightText = document.getElementsByClassName('title')[0];
       rightText.innerHTML = 'Exercício 5.1 - JavaScript'
}

correctText();

function paraLetrasMaiusculas () {
       let letrasMaiusculas = document.getElementsByTagName('p')[0];
       letrasMaiusculas.innerHTML = letrasMaiusculas.innerHTML.toUpperCase();
}

paraLetrasMaiusculas();

function showAllParagraphs () {
       let todosParagrafos = document.getElementsByTagName('p');
       for (let i = 0; i < todosParagrafos.length; i+= 1) {
              console.log(todosParagrafos[i])
       }
}

showAllParagraphs();