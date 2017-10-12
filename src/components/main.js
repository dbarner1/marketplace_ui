import React, { Component } from 'react';
import { Switch, Route } from 'react-router-dom';
import Home from './Home.js';
import ForSale from './ForSale.js';
import Contact from './Contact.js';
import Checkout from './checkout.js';

class Main extends Component {
  constructor() {
    super();
    this.state = {
      aisles: '',
      cart: 'testing'
    };
  }

  render() {
    return (
      <div className="Main">
        <Switch>
          <Route
              exact
              path='/'
              render={ routeProps => <Home {...routeProps} /> }
          />
          <Route path='/forsale' component={ForSale}/>
          <Route path='/contact' component={Contact}/>
          <Route path='/checkout' render={ routeProps => <Checkout {...routeProps} /> }/>
        </Switch>
      </div>
    );
  }
}


export default Main;
