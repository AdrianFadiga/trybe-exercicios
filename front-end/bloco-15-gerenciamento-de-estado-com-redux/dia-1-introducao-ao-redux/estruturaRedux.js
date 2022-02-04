const Redux = require('redux');

// Action creator
const fazerLogin = (email) => ({
  type: "LOGIN",
  email,
});

//Estado inicial
const INITIAL_STATE = {
  login: false,
  email: ''
};

// Reducer = padeiro
const reducer = (state = INITIAL_STATE, action) => {
  switch(action.type) {
    case 'LOGIN':
      return {
        ...state,
        login: !state.login,
        email: action.email
      }
      default:
        return state;
  }
};

//store
const store = Redux.createStore(reducer);

store.dispatch(fazerLogin("adrianmfadiga@gmail.com"));

console.log(store.getState());
