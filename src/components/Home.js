import React from 'react';
import '../stylesheets/index.css';
import Button from './button.js';
import Logo from '../images/logo.png';
import { Link } from 'react-router-dom';
import RaisedButton from './RaisedButton';

class Home extends React.Component {
  render() {
    return (
      <div id="Home">
        <img className="logo" alt='logo' src={ Logo } />
        <h4>From sun-up to fork-down</h4>
        <Link to='/forsale'><RaisedButton /></Link>
      </div>
    )
  }
}

export default Home;

function HandleClick () {

}
