import React, { Component } from 'react';
import Header from './Header'; 
import Player from './Player'; 
import AddPlayerForm from './AddPlayerForm';


class App extends Component {
  state = {
    players: [
      {
        name: "Guil",
        score: 0,
        id: 1
      },
      {
        name: "Treasure",
        score: 0,
        id: 2
      },
      {
        name: "Ashley",
        score: 0,
        id: 3
      },
      {
        name: "James",
        score: 0,
        id: 4
      }
    ]
  };


  // player id counter
  prevPlayerId = 4;

    handleScoreChange = (index, delta) => {
      this.setState( prevState => ({
        // update the score state of a player at the given index by the value passed in as delta
        score: prevState.players[index].score += delta 
      }));
      // console.log('index: ' + index, 'delta: ' + delta);
    }

    handleScoreChange = (index, delta) => {
      this.setState( prevState => {
        // New 'players' array - a copy of the previous `players` state
        const updatedPlayers = [ ...prevState.players ];
        // A copy of the player object we're targeting
        const updatedPlayer = { ...updatedPlayers[index] };

        // Update the target player's score
        updatedPlayer.score += delta;
        // Update the 'players' array with the target player's latest score
        updatedPlayers[index] = updatedPlayer;

        // Update the `players` state without mutating the original state
        return {
          players: updatedPlayers
        }; 
      }); 
    }


    handleAppPlayer = (name) => {
      // represents state before state was updated, so the players already on the board
      // console.log(...this.state.players); 

      this.setState( prevState => {
        // create a new array, clone the players array into our new array using the spread operator ...
        return {
          players: [
            ...prevState.players,
            {
              // when the property and value match in ES6, can just write it once, so name instead of name: name
              name: name,
              score: 0,
              // increment by 1 each time handleAppPlayer and setState get called
              id: this.prevPlayerId += 1
            }
          ]
        };
      });
    }

  handleRemovePlayer = (id) => {
    this.setState( prevState => {
      return {
        players: prevState.players.filter(p => p.id !== id)
      };
    });
  }

  render() {
    return (
      <div className="scoreboard">
        <Header 
          title="Scoreboard" 
          players={this.state.players}
        />
  
        {/* Players list */}
        {this.state.players.map( (player, index) =>
          <Player 
            name={player.name}
            score={player.score}
            id={player.id}
            key={player.id.toString()}
            index={index}
            changeScore={this.handleScoreChange}
            removePlayer={this.handleRemovePlayer}           
          />
        )}

        <AddPlayerForm addPlayer={this.handleAppPlayer} />
      </div>
    );
  }
}

export default App;
