import React from 'react';
import Header from './components/header.js'
import Main from './components/main.js'
import './stylesheets/index.css';


class App extends React.Component {
  constructor() {
    super();
    this.state = {
    };
  }

  render() {
    return (
      <div className="App">
        <Header />
        <Main />
      </div>
    )
  }
}

export default App;
