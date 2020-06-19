import React from "react";

const Inputcomponent = (props) => {
  return (
    <div>
      <input type="text" onChange={props.changed} />
      <p>O texto digitado foi: {props.inputed}</p>
    </div>
  );
};

export default Inputcomponent;
