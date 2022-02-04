const INITIAL_STATE = {
  colors: ['white', 'black', 'red', 'green', 'blue', 'yellow'],
  index: 0,
}

const NEXT_COLOR_ACTION = 'NEXT_COLOR'
const PREV_COLOR_ACTION = 'PREV_COLOR'

const nextColorAction = () => {
  return {
    type: NEXT_COLOR_ACTION
  }
}

const prevColorAction = () => {
  return {
    type: PREV_COLOR_ACTION,
  }
}

const randomColorAction = () => {
  return {
    type: RANDOM_COLOR_ACTION,
  }
}

const reducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case NEXT_COLOR_ACTION:
      return {
        ...state,
        index:  state.index > 4 ? state.index : state.index + 1,
      }
      case PREV_COLOR_ACTION:
        return {
          ...state,
          index: state.index > 0 ? state.index - 1 : state.index,
        }
    default:
      break;
  }
  return state;
};

const store = Redux.createStore(reducer);

const prevBTN = document.getElementById('previous');
const nextBTN = document.getElementById('next');

prevBTN.addEventListener('click', () => {
  store.dispatch(prevColorAction());
  console.log(store.getState());
}); 

nextBTN.addEventListener('click', () => {
  store.dispatch(nextColorAction())
  console.log(store.getState());
});

store.subscribe(() => {
  const newState = store.getState()
  document.getElementById('value').innerHTML = newState.colors[newState.index];
  document.getElementById('container').style.backgroundColor = newState.colors[newState.index];
})

