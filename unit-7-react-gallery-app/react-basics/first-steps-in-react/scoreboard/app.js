// react components are required to start with a capital
const Header = (props) => {
    // props is an object 
    // console.log(props); 
    return (
        <header>
            {/* make dynamic using props */}
            <h1>{ props.title }</h1>
            <span className="stats">Players: {props.totalPlayers}</span>
        </header>
    );
}

const Player = (props) => {
    // the parentheses holds the JSX
    // console.log(props.removePlayer);
    return (
        <div className="player">
            <span className="player-name">
                <button className="remove-player" onClick={ () => props.removePlayer(props.id) }>x</button>
                { props.name }
            </span>
            {/* nested components inside other components is called composition */}
            <Counter
                
            />
        </div>
    );
}

class Counter extends React.Component {
        
    // initialise component state
    state = {
        score: 0
    };

    // setup event handler
    incrementScore = () => {
        // console.log('Hi, from inside incrementScore!');
        // setState updates the value of the score
        // setState also tells the component to re-render, to make sure
        // everything is up to date in the UI
        this.setState( prevState => {
            return {
                score: prevState.score + 1
            } 
        });
        // console.log(this); 
    }

    decrementScore = () => {
        this.setState( prevState => {
            return {
                score: prevState.score - 1
            }
        }); 
    }

    // in classes, we use render() {} method, and return sits inside it
    render() {
        return (
            <div className="counter">
                <button className="counter-action decrement" onClick={this.decrementScore}> - </button>
                <span className="counter-score">{ this.state.score }</span>
                <button className="counter-action increment" onClick={this.incrementScore}> + </button>
            </div>
        ); 
    }
}

class App extends React.Component {

    // initialise player state 
    state = {
        players: [
            {
                name: "Guil",
                id: 1
              },
              {
                name: "Treasure",
                id: 2
              },
              {
                name: "Ashley",
                id: 3
              },
              {
                name: "James",
                id: 4
              }
        ]
    }

    handleRemovePlayer = (id) => {
        // filter is used to filter elements from an array,
        // without affecting the original array
        this.setState( prevState => {
            return {
                players: this.state.players.filter( p => p.id !== id )
            };
        });             
    }; 

    
    render() {
        return (
            <div className="scoreboard">
                {/* add the prop name, best practice camelCase */}
                {/* .length returns the number of player objects in the array */}
                <Header 
                    title="Scoreboard" 
                    totalPlayers={this.state.players.length} 
                />
    
                {/* Players list */}
                {this.state.players.map(player =>
                    // map loops through each item,
                    // then returns a new array with the processed items
                    <Player
                        name={player.name}
                        id={player.id}
                        // react docs recommend using a string as the key value,
                        // so use toString() method
                        key={player.id.toString()}
                        removePlayer={this.handleRemovePlayer}
                    />
                )}
            </div>
        );
    }
}

ReactDOM.render(
    // Accepts two arguments
    // 1. The react element, component or JS object you want to render
    <App />,
    // 2. Actual HTML element you want to update or render to
    document.getElementById('root')
)