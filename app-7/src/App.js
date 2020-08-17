import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import NewTask from './Components/NewTask';
import List from './Components/List';

class App extends Component{
  constructor(){
    super();
    this.state={
      list:[]
    }
  }

  handleAddTask=(todo)=>{
    this.setState({list:[...this.state.list, todo]})
  }

  render(){
  return (
    <div className="App">
      <h1>My to-do list:</h1>
      <NewTask addNewTask={this.handleAddTask}/>
      <List todo={this.state.list}/>
      
    </div>
  );
  }
}

export default App;
