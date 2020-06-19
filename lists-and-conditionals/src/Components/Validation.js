import React from "react";

const Validation = (props) => {
  let tamanho = props.txtlenght;

  let output = null;

  if (tamanho <= 5 && tamanho > 0) {
    output = (
      <div>
        <p>Tamanho muito curto!</p>
      </div>
    );
  }

  if (tamanho > 20) {
    output = (
      <div>
        <p>Tamanho muito longo!</p>
      </div>
    );
  }

  return (
    <div>
      <p>O tamanho do texto foi: {props.txtlenght}</p>
      <p>{output}</p>
    </div>
  );
};

export default Validation;
