import React from 'react';
import './Person.css';

function Person(props) {
  return (
    <div className="Person">
      <h2 onClick={props.change} onDoubleClick={props.changeBack}>{props.nome}</h2>
      <h4>idade: {props.idade}</h4>
      <h4>Currículo: {props.job}</h4>
      <h4>Outro State: {props.other}</h4>
      <input type="text" onChange={props.textChange} value={props.nome}/>
    </div>
  );
}

export default Person;
