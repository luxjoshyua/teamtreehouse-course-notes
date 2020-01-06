import React from 'react';

// Counter is a dependency within the Player component, so import it here, not in the main app.js file with the other components
import Counter from './Counter'; 

const Player = (props) => {
    return (
      <div className="player">
        <span className="player-name">
          <button className="remove-player" onClick={() => props.removePlayer(props.id)}>✖</button>
          { props.name }
        </span>
  
        <Counter 
          score={props.score} 
          // function is now available to be called/invoked from within the Counter component
          index={props.index}
          changeScore={props.changeScore}
        />
      </div>
    );
}

export default Player; 