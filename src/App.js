import React, { Component } from 'react';

import './App.css';
import Card from './card/components'

class App extends Component {
  render() {
    return (
      <div className="cards">
        <Card
          front="Front side 1"
          back="Back side 1"
        />
        <Card
          front="Front side 2"
          back="Back side 2"
        />
        <Card
          front="Front side 3"
          back="Back side 3"
        />
        <Card />
      </div>
    );
  }
}

export default App;
