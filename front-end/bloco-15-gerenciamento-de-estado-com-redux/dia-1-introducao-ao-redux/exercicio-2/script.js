// const { combineReducers } = require('redux');

const CHANGE_FIRST_NAME_AND_LASTNAME_ACTION = 'CHANGE_FIRST_NAME_AND_LASTNAME';
const CHANGE_SECOND_NAME_AND_LASTNAME_ACTION = 'CHANGE_SECOND_NAME_AND_LASTNAME'

const ESTADO_INICIAL_1 = {
  nome: 'Rodrigo',
  sobrenome: 'Santos da Silva',
  endereco: 'Rua Soldado Mathias, 765',
  cidade: 'Belo Horizonte',
};

const ESTADO_INICIAL_2 = {
  nome: 'Bruna',
  sobrenome: 'Santana Oliveira',
  endereco: 'Rua Holanda, 332',
  cidade: 'São Paulo',
};

const changeFirstNameAction = ({nome, sobrenome}) => {
  return {
    type: CHANGE_FIRST_NAME_AND_LASTNAME_ACTION,
    nome,
    sobrenome,
  }
}

const changeSecondNameAction = ({nome, sobrenome}) => {
  return {
    type: CHANGE_SECOND_NAME_AND_LASTNAME_ACTION,
    nome,
    sobrenome,
  }
}

const meuPrimeiroReducer = (state = ESTADO_INICIAL_1, action) => {
  switch (action.type) {
    case CHANGE_FIRST_NAME_AND_LASTNAME_ACTION:
      return {
        ...state,
        nome: action.nome,
        sobrenome: action.sobrenome,
      }
    default:
      return state;
  }
};

const meuSegundoReducer = (state = ESTADO_INICIAL_2, action) => {
  switch (action.type) {
    case CHANGE_SECOND_NAME_AND_LASTNAME_ACTION:
      return {
        ...state,
        nome: action.nome,
        sobrenome: action.sobrenome,
      }
    default:
      return state;
  }
};

const rootReducer = Redux.combineReducers({meuPrimeiroReducer, meuSegundoReducer});
const store = Redux.createStore(rootReducer);

store.subscribe(() => {
  const result = store.getState();
  document.getElementById('nome-1').innerText = result.meuPrimeiroReducer.nome;
  document.getElementById('sobrenome-1').innerText = result.meuPrimeiroReducer.sobrenome;
  document.getElementById('nome-2').innerText = result.meuSegundoReducer.nome;
  document.getElementById('sobrenome-2').innerText = result.meuSegundoReducer.sobrenome;
})

window.onload = () => {
  setTimeout(() => {
    store.dispatch(changeFirstNameAction({nome: 'Adrian', sobrenome: 'Fadiga'}));
    store.dispatch(changeSecondNameAction({nome: 'Valdeli', sobrenome: 'Minha Deusa'}))
  }, 1000)
}