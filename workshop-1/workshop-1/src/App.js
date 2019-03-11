import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Tasks from './Tasks/Task.js';

const dummyTaskData = 
[
  {
    title: "Go Shopping",
    description: "Buy some food"
  }, 
  {
    title: "Cook Dinner",
    description: "Cook some of the food you bought"
  },
  {
    title: "Eat dinner",
    description: "Eat the dinner you've eaten"
  }
]

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
        </header>
        <section>
        <Tasks title = "Go Shopping" description = "Buy some food"/>
        <Tasks title = "Cook Dinner" description = "Cook some of the food you bought"/>
        <Tasks title = "Eat dinner"  description = "Eat the dinner you've eaten"/>
        </section>
      </div>
    );
  }
}

export default App;



