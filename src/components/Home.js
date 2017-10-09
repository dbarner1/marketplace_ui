import React from 'react';
import '../stylesheets/index.css';
import Button from './button.js';

class Home extends React.Component {
  render() {
    return (
      <div id="Home">
        <div id="HomeHero">
          <p>Welcome to the home page.</p>
        </div>
        <Button text="Explore Portfolio" />
      </div>
    )
  }
}

export default Home;
