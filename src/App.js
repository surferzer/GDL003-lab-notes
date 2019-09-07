import React, { Component } from 'react';
import './App.css';
import Fire from './Fire'



class App extends Component {
 

  render() {
    return (
      <div className="App">
        <div className="App-header">
          <h2>Welcome to weed notes</h2>
        </div>
         <Fire />
      </div>
    );
  }
}

  

export default App;