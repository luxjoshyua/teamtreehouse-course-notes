import React, { useContext } from "react";
import { ScoreboardContext } from "./Context";
import PropTypes from "prop-types";
import Counter from "./Counter";

const Player = ({ index }) => {
  /* useContext(MyContext) only lets you read the context 
  and subscribe to its changes. You still need a 
  <MyContext.Provider> above in the tree to provide
  the value for this context. This happens in this app
  in index.js - <ScoreboardContext.Provider>
  


  */
  const { players, actions } = useContext(ScoreboardContext);

  return (
    <div className="player">
      <span className="player-name">
        <button
          className="remove-player"
          onClick={() => actions.removePlayer(players[index].id)}
        >
          ✖
        </button>
        {players[index].name}
      </span>
      <Counter index={index} />
    </div>
  );
};

Player.propTypes = {
  index: PropTypes.number,
};

export default Player;
