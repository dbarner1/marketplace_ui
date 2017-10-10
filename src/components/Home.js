import React from 'react';
import '../stylesheets/index.css';
import Logo from '../images/logo.png';
import { Link } from 'react-router-dom';
import RaisedButton from './RaisedButton';

class Home extends React.Component {

  render() {
    return (
      <div id="Home">
        <img className="logo" alt='logo' src={ Logo } />
        <div className="HeroText">
          <h4>From Sun Up</h4>
          <h4>To Fork Down</h4>
        </div>
        <Link to='/forsale'><RaisedButton className="HeroButton"  /></Link>
        <div className="HeroBottomText">
          <p>Never processed. Never compromised.</p>
          <p>Always.</p>
          <br/>
          <p className="copyright">Barner Builds 2017</p>
        </div>
      </div>
    )
  }
}

export default Home;
