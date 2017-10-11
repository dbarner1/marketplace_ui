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


  componentWillMount() {
    var Products = document.getElementsByClassName('Products');

    fetch('https://barner-marketplace-api.herokuapp.com/aisles.json')
    .then(function(response) {return response.json();})
    .then(function(json) {
      json.forEach(function(name) {
        Products[0].innerHTML += "<div class='product'>"
                              + "<p>" + name.name + "</p>"
                              + "<img class='productImage' src='" + name.image + "'></img>"
                              + ' '
                              + "<p>" + name.description + "</p>"
                              + "<br/>"
                              + "<p>" + name.price + "</p>"
                              +"<br/>"
                              + "</div>";

      });
    })
  };
