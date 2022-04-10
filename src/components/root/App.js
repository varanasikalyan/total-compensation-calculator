import React, { Component } from 'react';
import Header from '../layout/header/Header';
import Routes from '../routes/Routes';

class App extends Component {
  render() {
    return (
        <div className="App">
          <Header />
          <Routes />
        </div>
    );
  }
}

export default App;
