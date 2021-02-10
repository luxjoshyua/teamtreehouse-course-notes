import React, { Component } from "react";
import Header from "./Header";
import Player from "./Player";
import AddPlayerForm from "./AddPlayerForm";

class App extends Component {
  state = {
    players: [
      {
        name: "Guil",
        score: 0,
        id: 1,
      },
      {
        name: "Treasure",
        score: 0,
        id: 2,
      },
      {
        name: "Ashley",
        score: 0,
        id: 3,
      },
      {
        name: "James",
        score: 0,
        id: 4,
      },
    ],
  };

  // player id counter
  prevPlayerId = 4;

  // delta; the number to change the score by
  handleScoreChange = (index, delta) => {
    this.setState((prevState) => {
      // New 'players' array – a copy of the previous `players` state
      const updatedPlayers = [...prevState.players];
      // A copy of the player object we're targeting
      const updatedPlayer = { ...updatedPlayers[index] };

      // Update the target player's score
      updatedPlayer.score += delta;
      // Update the 'players' array with the target player's latest score
      updatedPlayers[index] = updatedPlayer;

      // Update the `players` state without mutating the original state
      return {
        players: updatedPlayers,
      };
    });
  };

  handleAddPlayer = (name) => {
    // console.log(...this.state.players );
    this.setState((prevState) => {
      return {
        players: [
          ...prevState.players,
          {
            // when key and value match in es2015, can just use the keyname
            name,
            score: 0,
            // increment by 1 each time new player is added
            id: (this.prevPlayerId += 1),
          },
        ],
      };
    });
  };

  // update the players state using the concat() method
  // handleAddPlayer = (name) => {
  //   let newPlayer = {
  //     name,
  //     score: 0,
  //     id: this.prevPlayerId += 1
  //   };
  //   this.setState( prevState => ({
  //     players: prevState.players.concat(newPlayer)
  //   }));
  // }

  getHighScore = () => {
    // filter through the players state to get all the scores
    const scores = this.state.players.map((p) => p.score);
    // Use Math.max() to return the largest score value. All scores are passed to
    // Math.max() via the spread operator (...scores)
    const highScore = Math.max(...scores);
    // then check: if there's a highest score (a score greater than 0), return that score
    if (highScore) {
      return highScore;
    }
    // otherwise return null because there is no high score
    return null;
  };

  handleRemovePlayer = (id) => {
    this.setState((prevState) => {
      return {
        players: prevState.players.filter((p) => p.id !== id),
      };
    });
  };

  render() {
    const highScore = this.getHighScore();

    return (
      <div className="scoreboard">
        <Header players={this.state.players} />

        {/* Players list */}
        {this.state.players.map((player, index) => (
          <Player
            name={player.name}
            score={player.score}
            id={player.id}
            key={player.id.toString()}
            index={index}
            changeScore={this.handleScoreChange}
            removePlayer={this.handleRemovePlayer}
            // is a player's 'score' prop equal to the high score?
            isHighScore={highScore === player.score}
          />
        ))}

        <AddPlayerForm addPlayer={this.handleAddPlayer} />
      </div>
    );
  }
}

export default App;
