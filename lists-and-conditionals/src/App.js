import React, { useState } from "react";
import Inputcomponent from "./Components/Input";
import Validation from "./Components/Validation";
import Char from "./Components/Char";

function App(props) {
  const [newText, setNewText] = useState(['']);

  const onChangeHandler = (event) => {
    return setNewText(event.target.value);
  };
  
  const CharList = newText.toString().split('').map(letra => {
    return <Char caracter={letra}/>
  });

  return (
    <div>
      <Inputcomponent inputed={newText} changed={onChangeHandler} />
      <Validation txtlenght={newText.length}/>
      {CharList}
    </div>
  );
}

export default App;
