import React, { Component } from 'react';
import { Switch, Route, Redirect } from 'react-router-dom';
import Home from './Home.js';
import ForSale from './ForSale.js';
import Contact from './Contact.js';

class Main extends Component {
  constructor() {
    super();
    this.state = {
      aisles: null
    };
  }

  componentDidMount() {
    fetch('https://barner-marketplace-api.herokuapp.com/aisles.json')
      .then(response => response.json())
      .then(json => {
        this.setState({aisles: json});
      });

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
          <Route path='/forsale' component={ForSale}/>
          <Route path='/contact' component={Contact}/>
        </Switch>
      </div>
    );
  }
}

export default Main;
