const NEXT_COLOR = 'NEXT';
const PREVIOUS_COLOR = 'PREV';



const INITIAL_STATE = {
colors: ['white', 'black', 'red', 'green', 'blue', 'yellow'],
index: 0,
};


const reducer = (state = INITIAL_STATE, action) => {
switch (action.type) {
case NEXT_COLOR:            
return {
  ...state,
  index: state.index + 1,
}          
case PREVIOUS_COLOR:
return {
  ...state,
  index: state.index - 1,
}       
default:
return {
  ...state
}
}
};

const store = Redux.createStore(reducer);



const nextBtn = document.querySelector('#next');
const prevBtn = document.querySelector('#previous');

const nextColor = () => {
return {
type: NEXT_COLOR,
}
}

const previousColor = () => {
return {
type: PREVIOUS_COLOR,
}
}

nextBtn.addEventListener('click', () => {
store.dispatch(nextColor());
});

prevBtn.addEventListener('click', () => {
store.dispatch(previousColor());
});

store.subscribe(() => {
  const state = store.getState();
  const colorValue = document.getElementById('value');
  colorValue.innerHTML = state.colors[state.index];
  document.getElementById('container').style.backgroundColor = colorValue.innerHTML;
});
