import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

class App extends Component{
  constructor(){
    super();

    this.state={
      inputBox= ''
    }
  }

  handleBoxInput=(value)=>{
    this.setState({inputBox:value})
  }
  render(){
  return (
    <div className="App">
      <input onChange={(event)=>this.handleBoxInput(event.target.value)}></input>
      <p>{this.state.inputBox}</p>

    </div>
  );
  }
}

export default App;
