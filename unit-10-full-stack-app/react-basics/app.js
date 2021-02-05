// have to use uppercase for function name
const Header = () => {
  return (
    <header>
      <h1>Scoreboard</h1>
      <span className="stats">Players: 1</span>
    </header>
  );
};

const Player = () => {
  return (
    <div className="player">
      <span className="player-name">Guil</span>
      <Counter />
    </div>
  );
};

const Counter = () => {
  return (
    <div className="counter">
      <button className="counter-action decrement"> - </button>
      <span className="counter-score">30</span>
      <button className="counter-action increment"> + </button>
    </div>
  );
};

const App = () => {
  return (
    <div className="scoreboard">
      <Header />
      {/* players list */}
      <Player />
    </div>
  );
};

ReactDOM.render(
  // pass the top-level component to ReactDOM.render()
  <App />,
  // container element where our code will be rendered
  document.getElementById("root")
);
