const INITIAL_STATE = {
  colors: ['white', 'black', 'red', 'green', 'blue', 'yellow'],
  index: 0,
}

const NEXT_COLOR_ACTION = 'NEXT_COLOR';
const PREVIOUS_COLOR_ACTION = 'PREVIOUS_COLOR';
const reducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case NEXT_COLOR_ACTION:
       return {
         ...state,
         index: state.index + 1,
       }           
    case PREVIOUS_COLOR_ACTION:
      return {
        ...state,
        index: state.index - 1,
      }      
      default:
        break;
      }
      return state;
    }

const store = Redux.createStore(reducer);

const nextColor = () => {
  return {
    type: NEXT_COLOR_ACTION,
  }
}

const prevColor = () => {
  return {
    type: PREVIOUS_COLOR_ACTION,
  }
}




    const nextBTN = document.getElementById('next');
    const prevBTN = document.getElementById('previous');
    const colorValue = document.getElementById('value');

    nextBTN.addEventListener('click', () => {
      store.dispatch(nextColor())
      // console.log(store.getState());
    });

    prevBTN.addEventListener('click', () => {
      store.dispatch(prevColor());
      // console.log(store.getState());
    });

    store.subscribe(() => {
     const result = store.getState();
     console.log(result);
      document.getElementById('value').innerHTML = result.colors[result.index];
      document.getElementById('container').style.backgroundColor = result.colors[result.index];
    })



    