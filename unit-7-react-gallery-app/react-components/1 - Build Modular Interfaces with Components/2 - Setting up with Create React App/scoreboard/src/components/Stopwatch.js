import React, { Component } from 'react';

// Requires 3 pieces of state
// 1. Running state
// 2. Elapsed time state
// 3. Previous time state, so we can calculate how much time has passed

class Stopwatch extends Component {

    state = {
        isRunning: false,
        // represents the time passed by, initialise at 0
        elapsedTime: 0,
        previousTime: 0
    };

    componentDidMount() {
        // console.log('The stopwatch mounted!');
        this.intervalID = setInterval(() => this.tick(), 100); 
    }

    // if stopwatch no longer needs to be mounted, this method unmounts it by clearing the interval
    componentWillUnmount() {
        clearInterval(this.intervalID); 
    }

    tick = () => {
        // console.log('ticking...'); 
        if (this.state.isRunning) {
            const now = Date.now();
            this.setState( prevState => ({
                previousTime: now,
                elapsedTime: prevState.elapsedTime + (now - this.state.previousTime)
            }));
        }
    }

    handleStopwatch = () => {
        this.setState( prevState => ({
            isRunning: !prevState.isRunning
        }));
        if (!this.state.isRunning) {
            this.setState({ previousTime: Date.now() }); 
        }
    }

    handleReset = () => {
        this.setState({elapsedTime: 0}); 
    }

    render() {

        // /* Math.floor() rounds down to the nearest integer
        const seconds = Math.floor(this.state.elapsedTime / 1000 );

        return (
            <div className="stopwatch">
                <h2>Stopwatch</h2>
                <span className="stopwatch-time">{seconds}</span>
                <button onClick={this.handleStopwatch}>
                    {/* if isRunning is true, display the text 'Stop', otherwise display the text 'Start' */}
                    { this.state.isRunning ? 'Stop' : 'Start' }
                </button>
                <button onClick={this.handleReset}>Reset</button>
            </div>
        );
    }
}

export default Stopwatch; 