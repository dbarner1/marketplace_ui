import React, { Component } from 'react';
import './App.css';


class Main extends Component {
  constructor() {
    super();
    this.state = {
      data: ''
    };
  }

  render() {
    return (
      <div>
        <button onClick={ handleClick.bind(this) }>Load Users</button>
        <div className="Main">
        </div>
      </div>
    );
  }
}

export default Main;

var results = document.getElementsByClassName('Main');

function handleClick(e) {
  fetch('https://barner-marketplace-api.herokuapp.com/users.json')
  .then(function(response) {return response.json();})
  .then(function(json) {
    json.forEach(function(name) {
      results[0].innerHTML += '<br/>';      
      results[0].innerHTML += name.first_name;
      results[0].innerHTML += '<br/>';
    });
  })
};
