import { createStore } from 'redux';

function ProductsInCart(state = [], action, product) {
  switch (action.type) {
  case 'addItem':
    return state + [product]
  case 'deleteItem':
    return state + [product]
  case 'clearCart'
    return state = 0
  default:
    return state
  }
}

var store = Redux.createStore(ProductsInCart)
)

var ProductsInCart = document.getElementById("ProductsInCart");

function render() {
  ProductsInCart.innerHTML = store.getState().toString()
}

render()
store.subscribe(ProductsInCart)

document.getElementById("AddProductButton")
  .addEventListener("click", function () {
    store.dispatch({type: 'addItem'})
  })
