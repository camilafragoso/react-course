import React from 'react';

const Food = (food) => {
    return(
        <div className="Person">
            <h2>{food.nome}</h2>
            <h4>{food.dificuldade}</h4>
        </div>
    );
}
export default Food;