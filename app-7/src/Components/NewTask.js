import React, { Component } from 'react';
import { render } from '@testing-library/react';


class NewTask extends Component{
    constructor(){
        super();

        this.state={
            input:''
        };
    }
    handleInput=(value)=>{
        this.setState({input:value})
    }
    handleButton=()=>{
        this.props.addNewTask(this.state.input);
        this.setState({input:''});
    }
render(){
    
    return(
        <div>
            <input value={this.state.input} placeholder='Enter new task' onChange={(event)=>this.handleInput(event.target.value)}></input>
            <button onClick={()=>this.handleButton()}>Add</button>
        </div>
    );
}


}
export default NewTask;