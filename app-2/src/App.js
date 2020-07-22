import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

class App extends Component{
constructor(){
  super();

  this.state={
    list:['Lipstick','Shoes', 'Bag','ID','Money']
  }
}
  render(){
    let mappedList=this.state.list.map((itemsInList, index)=>{
      return <div key={index}>
              <h1>{itemsInList}</h1>
      </div>
    })
  
  return (
    <div className="App">
      {mappedList}
      
    </div>
  );
  }
}

export default App;
