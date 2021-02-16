import React, { useContext } from "react";
import { ScoreboardContext } from "./Context";
import Player from "./Player";

const PlayerList = () => {
  const { players } = useContext(ScoreboardContext);
  return (
    <>
      {/* map over the players array coming from the Context's state */}
      {players.map((player, index) => (
        <Player key={player.id} index={index} />
      ))}
    </>
  );
};

export default PlayerList;
