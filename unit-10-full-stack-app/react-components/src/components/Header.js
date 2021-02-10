import React from "react";
import PropTypes from "prop-types";
import Stats from "./Stats";
import Stopwatch from "./Stopwatch";

// define the value to extract from props
const Header = ({ players, title }) => {
  // console.log("our players: ", players);
  // console.log("our title: ", title);

  return (
    <header>
      <Stats players={players} />
      <h1>{title}</h1>
      <Stopwatch />
    </header>
  );
};

Header.PropTypes = {
  title: PropTypes.string,
  // check it is an array of objects
  players: PropTypes.arrayOf(PropTypes.object),
};

Header.defaultProps = {
  title: "Scoreboard",
};

export default Header;
