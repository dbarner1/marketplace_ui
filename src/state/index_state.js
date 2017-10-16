function AislesAPIResponse(state, action) {
  if (typeof state === 'undefined') {
    return 0
  }
  switch (action.type) {
    case 'success':
      return json
    case 'failure':
      return nil
    default:
      return nil
  }
}

var store = Redux.createStore(AislesAPIResponse);

var heroBottomTextEL = document.getElementById('HeroBottomText') //displays state change.
function render() {
  heroBottomTextEL.innerHTML = store.getState().toString()
}
render()
store.subscribe(render)


document.getElementById('aisles')
  .addEventListener('load', function () {

    store.dispatch({ type: 'success' })
  })



componentDidMount() {

}

(fetch('https://barner-marketplace-api.herokuapp.com/aisles.json')
  .then(response => response.json())
  .then(json => {
    this.setState({aisles: json})
  }))


  ProductsInCart[0].innerHTML = "<div>"
  ProductsInCart[0].innerHTML +=  product
  ProductsInCart[0].innerHTML += "</div>"
  ProductsInCart[0].innerHTML += <br/>
