import { createStore } from 'redux';

function counter(state = 0, action) {
  switch (action.type) {
  case 'practice':
    return state + 1
  case 'for real':
    return state - 1
  default:
    return state
  }
}

var store = Redux.createStore(
  reducer, 
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
)

var result = document.getElementById("result");

function render() {
  result.innerHTML = store.getState().toString()
}

render()
store.subscribe(render)

document.getElementById("HeroButton")
  .addEventListener("click", function () {
    store.dispatch({type: 'practice'})
    console.log(store.getState().toString());
  })
