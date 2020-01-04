// react components are required to start with a capital
const Header = () => {
    return (
        <header>
            <h1>Scoreboard</h1>
            <span className="stats">Players: 1</span>
        </header>
    );
}

const Player = () => {
    // the parentheses holds the JSX
    return (
        <div className="player">
            <span className="player-name">
                Guil
            </span>
            {/* nested components inside other components is called composition */}
            <Counter />
        </div>
    );
}

const Counter = () => {
    return (
        <div className="counter">
            <button className="counter-action decrement"> - </button>
            <span className="counter-score">35</span>
            <button className="counter-action increment"> + </button>
        </div>
    ); 
}

const App = () => {
    return (
        <div className="scoreboard">
            <Header />

            {/* Players list */}
            <Player />
        </div>
    );
}

ReactDOM.render(
    // Accepts two arguments
    // 1. The react element, component or JS object you want to render
    <App />,
    // 2. Actual HTML element you want to update or render to
    document.getElementById('root')
)