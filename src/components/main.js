import React, { Component } from 'react';
import { Switch, Route } from 'react-router-dom';
import Home from './Home.js';
import ForSale from './ForSale.js';
import Contact from './Contact.js';
import Product from './product.js';

class Main extends Component {
  constructor() {
    super();
    this.state = {
      aisles: ''
    };
  }

  render() {
    return (
      <div className="Main">
        <Switch>
          <Route
              exact
              path='/'
              render={routeProps => <Home {...routeProps} />}
          />
          <Route exact path='/forsale' component={ForSale}/>
          <Route path='/forsale/:key' component={Product}/>
          <Route path='/contact' component={Contact}/>
        </Switch>
      </div>
    );
  }
}


export default Main;
