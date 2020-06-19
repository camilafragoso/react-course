import React from 'react';
import { Component } from 'react';

class UserOutput extends Component {
    render(){
        return (
            <div>
                <h1 onClick={this.props.change}>{this.props.userName}</h1>
                <p>{this.props.p1}</p>
                <p>{this.props.p2}</p>
            </div>
        );
    }
}

export default UserOutput;