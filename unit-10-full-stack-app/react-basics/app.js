// have to use uppercase for function name
// pass in the props params
const Header = (props) => {
  return (
    <header>
      <h1>{props.title}</h1>
      <span className="stats">Players: {props.totalPlayers}</span>
    </header>
  );
};

// stateless functional component
const Player = (props) => {
  // console.log(props.removePlayer);
  return (
    <div className="player">
      <span className="player-name">
        <button
          className="remove-player"
          onClick={() => props.removePlayer(props.id)}
        >
          ✖
        </button>
        {props.name}
      </span>
      <Counter />
    </div>
  );
};

// stateful functional component
class Counter extends React.Component {
  // constructor() {
  //   super();
  //   this.state = {
  //     score: 0,
  //   };
  // }

  // is the same as writing the above
  state = {
    score: 0,
  };

  incrementScore = () => {
    // console.log(this);
    this.setState((prevState) => ({
      score: prevState.score + 1,
    }));
  };

  decrementScore = () => {
    this.setState((prevState) => ({
      score: prevState.score - 1,
    }));
  };

  render() {
    return (
      <div className="counter">
        <button
          className="counter-action decrement"
          onClick={this.decrementScore}
        >
          {" "}
          -{" "}
        </button>
        <span className="counter-score">{this.state.score}</span>
        <button
          className="counter-action increment"
          onClick={this.incrementScore}
        >
          {" "}
          +{" "}
        </button>
      </div>
    );
  }
}

class App extends React.Component {
  state = {
    players: [
      {
        name: "Guil",
        id: 1,
      },
      {
        name: "Treasure",
        id: 2,
      },
      {
        name: "Ashley",
        id: 3,
      },
      {
        name: "James",
        id: 4,
      },
    ],
  };

  handleRemovePlayer = (id) => {
    this.setState((prevState) => {
      return {
        players: prevState.players.filter((player) => player.id !== id),
      };
    });
  };

  render() {
    return (
      <div className="scoreboard">
        <Header title="Scoreboard" totalPlayers={this.state.players.length} />

        {/* players list: player represents the current item being processed in the array */}
        {this.state.players.map((player) => (
          <Player
            name={player.name}
            id={player.id}
            key={player.id.toString()}
            removePlayer={this.handleRemovePlayer}
          />
        ))}
      </div>
    );
  }
}

ReactDOM.render(
  // pass the top-level component to ReactDOM.render()
  <App />,
  // container element where our code will be rendered
  document.getElementById("root")
);
