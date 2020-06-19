import Person from "./Person/Person";
import Food from "./Food/Food";
import { Component } from "react";
import { useState } from "react";
import React from 'react';
import './App.css';

//ATUALIZACOES NO PROP E STATE ATUALIZAM O DOM, POREM SE NAO NOMEAR COMO PROPS AINDA ATUALIZA?
//OBS: A DIFERENÇA ENTRE HOOKS E STATE É QUE O STATE JUNTA OS DADOS E SO TEM 1 STATE CALL,
//ENQUANTO HOOKS SO SUBSTITUI OS DADOS E PODE TER VÁRIOS STATE CALLS.
//OBS: AO RECARREGAR A PÁGINA, OS DADOS VOLTAM AO STATE INICIAL.


// MANEIRA COMUM DE FAZER COMPONENTES: USANDO CLASS E STATE

class App extends Component {
    //UMA MANEIRA DE ADICIONAR DADOS AOS PROPS É UTILIZANDO STATE
    state = {
        persons: [
            {name: 'Maximilian Scharwmüller', age: 29, job: 'Web Developer e professor'},
            {name: 'Camila', age: 21, job: 'Engenheira Biomedica'}
        ],
        other: 'state de teste'
    }

    //NOTE QUE AS INFORMAÇÕES DENTRO DE PERSONS SERÃO SUBSTITUIDAS PELO NOVO PERSONS, PERDENDO
    //INFORMAÇÕES, ENQUANTO O OTHER SE MANTÉM - CLASS COMPONENT. 
    
    //NO FUNCTIONAL COMPONENT TUDO É SUBSTITUÍDO E O OTHER SE PERDE.

    switchNameHandler = (newName) => {
        this.setState({
            persons: [
            {name: 'Maximilliam Scharwmuller', age: 30},
            {name: newName, age: 22}
        ]
        });
    }

    switchBackNameHandler = () => {
        this.setState({
            persons: [
            {name: 'Maximilian Scharwmüller', age: 29, job: 'Web Developer e professor'},
            {name: 'Camila', age: 21, job: 'Engenheira Biomedica'}
        ]
        });
    }

    nameChangeHandler = (event) => {
        this.setState({
            persons: [
            {name: 'Maximilliam Scharwmuller', age: 30},
            {name: event.target.value, age: 22}
        ]
        });
    }

    render() {
        return(
            <div>
                <h1 className="title">Cards de Pessoas</h1>
                <button className="botao" onClick={this.switchNameHandler.bind(this, 'ahsuhaus')} 
                onDoubleClick={this.switchBackNameHandler}>Clique aqui</button>
                <div className="pcards"> 
                    <Person nome={this.state.persons[0].name} idade={this.state.persons[0].age} 
                    job={this.state.persons[0].job} other={this.state.other} change={this.switchNameHandler}
                    changeBack={this.switchBackNameHandler}/>

                    <Person nome={this.state.persons[1].name} idade={this.state.persons[1].age} 
                    job={this.state.persons[1].job} other={this.state.other} 
                    textChange={this.nameChangeHandler} />
                </div>
                <h1 className="title">Cards de Comidas</h1>
                <div>
                    <Food nome="hot dog" dificuldade="Fácil"/>
                    <Food nome="Yakissoba" dificuldade="Médio"/>
                    <Food nome="Peixada" dificuldade="Difícil"/>
                    <Food nome="Vitamina" dificuldade="Fácil"/>
                </div>
            </div>
        );
    }
}


export default App;