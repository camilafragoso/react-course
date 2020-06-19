import React from "react";
import "./Char.css"

const Char = (props) => {
    
    return (
        <div className="overall">
            {props.caracter}
        </div>
    );
};

export default Char;