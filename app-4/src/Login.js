import React, { Component } from 'react';


class Login extends Component{
    constructor(){
        super();
        this.state={
            username: '',
            password: ''
        };
    }
    handleUsername=(value)=>{
        this.setState({username:value})
    }
    handlePassword=(value)=>{
        this.setState({password:value})
    }
    handleButton=()=>{
        alert(`Username: ${this.state.username} Password:${this.state.password}`)
    }

    render(){
        return(
            <div>
                <input onChange={(event)=>this.handleUsername(event.target.value)}></input>
                <input onChange={(event =>this.handlePassword(event.target.value))}></input>
                <button onClick={()=>this.handleButton()}>Login</button>
            </div>
        );
    }

}

export default Login;