//MANEIRA ATUAL DE FAZER COMPONENTES: USANDO FUNCTION E HOOKS
const App = (props) => {

    const [personState, setPersonState] = useState({
        persons: [
            {name: 'Maximilliam Scharwmuller', age: 29, job: 'Desenvolvedor WEB e Professor'},
            {name: 'Camila', age: 21, job: 'Engenheira Biomédica'}
        ],
        other: 'test state'
    }
    );
    console.log(personState);


    const switchNameHandler = () => {
        setPersonState({
            persons: [
            {name: 'Maximilliam Scharwmuller', age: 900},
            {name: 'Camila Fragoso', age: 200}
        ]
        });
    }

    return (
        <div>
            <h1 className="title">People Cards</h1>
            <button className="botao" onClick={switchNameHandler}>Clique aqui</button>
            <div className="pcards"> 
                {/*RENDERIZANDO OS DADOS DO STATE*/}
                <Person nome={personState.persons[0].name} idade={personState.persons[0].age}
                job={personState.persons[0].job} />
                <Person nome={personState.persons[1].name} idade={personState.persons[1].age} 
                job={personState.persons[1].job} />
            </div>
            <h1 className="title">Food Cards</h1>
            <div>
                {/*OUTRA MANEIRA (NAO MUITO BOA) É ADICIONAR OS DADOS DIRETO NO COMPONENTE:*/}
                <Food nome="Cachorro Quente" dificuldade="Fácil"/>
                <Food nome="Yakissoba" dificuldade="Médio"/>
                <Food nome="Peixada" dificuldade="Difícil"/>
                <Food nome="Vitamina" dificuldade="Fácil"/>
            </div>
        </div>
    );
}

