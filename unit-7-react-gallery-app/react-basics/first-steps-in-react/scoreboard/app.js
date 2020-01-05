const players = [
    {
        name: "Guil",
        score: 50,
        id: 1
      },
      {
        name: "Treasure",
        score: 85,
        id: 2
      },
      {
        name: "Ashley",
        score: 95,
        id: 3
      },
      {
        name: "James",
        score: 80,
        id: 4
      }
]

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
    return (
        <div className="player">
            <span className="player-name">
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
    incrementScore() {
        console.log('Hi, from inside incrementScore!');
    }

    // in classes, we use render() {} method, and return sits inside it
    render() {
        return (
            <div className="counter">
                <button className="counter-action decrement"> - </button>
                <span className="counter-score">{ this.state.score }</span>
                <button className="counter-action increment" onClick={this.incrementScore}> + </button>
            </div>
        ); 
    }
}

const App = (props) => {
    return (
        <div className="scoreboard">
            {/* add the prop name, best practice camelCase */}
            {/* .length returns the number of player objects in the array */}
            <Header title="Scoreboard" totalPlayers={props.initialPlayers.length} />

            {/* Players list */}
            {props.initialPlayers.map(player =>
                // map loops through each item,
                // then returns a new array with the processed items
                <Player
                    name={player.name}
                    // react docs recommend using a string as the key value,
                    // so use toString() method
                    key={player.id.toString()}
                />
            )}
        </div>
    );
}

ReactDOM.render(
    // Accepts two arguments
    // 1. The react element, component or JS object you want to render
    <App initialPlayers={players}/>,
    // 2. Actual HTML element you want to update or render to
    document.getElementById('root')
)