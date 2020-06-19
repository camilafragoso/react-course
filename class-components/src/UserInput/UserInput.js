import React from 'react';
import { Component } from 'react';


class UserInput extends Component {
    render(){
        return (
            <input type="text" onChange={this.props.change} 
            value={this.props.currentName}/>
        );
    }
}

export default UserInput;