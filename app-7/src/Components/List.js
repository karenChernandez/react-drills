import React, { Component } from 'react';
import Todo from './Todo';

class List extends Component{
    constructor(){
        super();

        this.state={}
    }

    render(){
        console.log('PROPS', this.props)
        let mappedList=this.props.todo.map((todo, index)=>{
            return <Todo key={index} todo={todo}/>
        })
        return(
            <div>{mappedList}</div>
        );
    }
}
export default List;