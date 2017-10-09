import React, { Component } from 'react';
import { Switch, Route } from 'react-router-dom';
import Home from './Home.js';
import ForSale from './ForSale.js';
import Contact from './Contact.js';


class Main extends Component {
  constructor() {
    super();
    this.state = {
      data: ''
    };
  }

  render() {
    return (
      <div className="Main">
        <Switch>
          <Route exact path='/' component={Home}/>
          <Route path='/forsale' component={ForSale}/>
          <Route path='/contact' component={Contact}/>
        </Switch>
      </div>
    );
  }
}

export default Main;
