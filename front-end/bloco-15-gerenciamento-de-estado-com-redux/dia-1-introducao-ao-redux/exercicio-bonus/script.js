const INCREMENT = 'INCREMENT';
const DECREMENT = 'DECREMENT';
const INCREMENT_VALUE = 'INCREMENT_VALUE';
const DECREMENT_VALUE = 'DECREMENT_VALUE';
const INITIAL_STATE = {
  contador: 0,
  incrementValue: 0,
  decrementValue: 0,
  clickCount: 0,
  addedValues: [],
};

const incrementAction = () => {
  return {
    type: INCREMENT,
  }
};

const decrementAction = () => {
  return {
    type: DECREMENT,
  }
};

const incrementValueAction = () => {
  return {
    type: INCREMENT_VALUE,
  }
}

const decrementValueAction = () => {
  return {
    type: DECREMENT_VALUE,
  }
}

const reducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case INCREMENT:
      return {
        ...state,
        contador: state.contador + state.incrementValue - state.decrementValue,
        clickCount: state.clickCount + 1,
      };
    case DECREMENT:
      return {
        ...state,
        contador: state.contador - state.incrementValue - state.decrementValue,
        clickCount: state.clickCount + 1,
      };
      case INCREMENT_VALUE:
        return {
          ...state,
          incrementValue: Number(incrementValueContainer.value)
        }
        case DECREMENT_VALUE:
          return {
            ...state,
            decrementValue: Number(decrementValueContainer.value)
          }

    default:
      return state;
  }
};
const store = Redux.createStore(reducer);

const incrementBTN = document.getElementById('increment');
const decrementBTN = document.getElementById('decrement');
const incrementValueContainer = document.getElementById('incrementCounter');
const decrementValueContainer = document.getElementById('decrementCounter');

incrementBTN.addEventListener('click', () => {
  store.dispatch(incrementAction());
  // console.log(store.getState());
});

decrementBTN.addEventListener('click', () => {
  store.dispatch(decrementAction());
  // console.log(store.getState());
});

incrementValueContainer.addEventListener('click', () => {
  store.dispatch(incrementValueAction());
  console.log(store.getState());
});

decrementValueContainer.addEventListener('click', () => {
  store.dispatch(decrementValueAction());
  // console.log(store.getState());
})

store.subscribe(() => {
  const currentState = store.getState();
  document.getElementById('value').innerText = currentState.contador;
  document.getElementById('counterClicks').innerText = currentState.clickCount;
});
