import React, { Component } from 'react';
import './App.css';

import UserInput from './UserInput/UserInput';
import UserOutput from './UserOutput/UserOutput';

class App extends Component {

  state = {
    username:["camila.campos", "fulana.silva"]
  }

  changeNameHandler = (event) => {
    this.setState({
      username:[event.target.value, "fulana.silva"]
    });
  }

  render(){
    return (
    <div>
      <UserInput change={this.changeNameHandler} currentName={this.state.username[0]}/>
      <UserOutput 
        userName={this.state.username[0]}
        change={this.changeStateHandler}
        p1="Lorem ipsum" 
        p2="Duis aute irure dolor"
      />

      <UserOutput 
        userName={this.state.username[1]}
        p1="Lorem ipsum" 
        p2="Duis aute irure dolor"
        />
    </div>
    );
  }
}

export default App;
