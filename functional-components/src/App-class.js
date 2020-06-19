class App extends Component {
    //UMA MANEIRA DE ADICIONAR DADOS AOS PROPS É UTILIZANDO STATE
    state = {
        persons: [
            {name: 'Maximilliam Scharwmuller', age: 29, job: 'Web Developer and Teacher'},
            {name: 'Camila', age: 21, job: 'Engenheira Biomedica'}
        ],
        other: 'state de teste'
    }

    switchNameHandler = () => {
        this.setState({
            persons: [
            {name: 'Maximilliam Scharwmuller', age: 30},
            {name: 'Camila Fragoso', age: 22}
        ]
        });
    }

    render() {
        return(
            <div>
                <h1 className="title">People Cards</h1>
                <button className="botao" onClick={this.switchNameHandler}>Clique aqui</button>
                <div className="pcards"> 
                    <Person nome={this.state.persons[0].name} idade={this.state.persons[0].age} 
                    job={this.state.persons[0].job}/>
                    <Person nome={this.state.persons[1].name} idade={this.state.persons[1].age} 
                    job={this.state.persons[1].job} />
                </div>
                <h1 className="title">Food Cards</h1>
                <div>
                    <Food nome="Cachorro Quente" dificuldade="Fácil"/>
                    <Food nome="Yakissoba" dificuldade="Médio"/>
                    <Food nome="Peixada" dificuldade="Difícil"/>
                    <Food nome="Vitamina" dificuldade="Fácil"/>
                </div>
            </div>
        );
    }
}
