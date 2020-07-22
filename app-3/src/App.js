import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

class App extends Component{
  constructor(){
    super();

    this.state={
      foodList: ["spaghetti", "ice cream", "sushi", "bologna", "cheese"],
      filterFood: ''
    }
  }
  handleEvent=(value)=>{
    this.setState({ filterFood:value})
  }
  render(){
    let foodsToDisplay = this.state.foodList
    .filter((foodItem, index)=>{
      return foodItem.includes(this.state.filterFood);
    }).map((foodItem,index)=>{
      return <div key={index}>
        <h1>{foodItem}</h1>
      </div>
    })
  return (
    <div className="App">
      <input onChange={(event)=>this.handleEvent(event.target.value)}></input>
      {foodsToDisplay}
    </div>
  );
  }
}

export default App;
