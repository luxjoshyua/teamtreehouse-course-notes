import React from "react";
import PropTypes from "prop-types";

const Counter = ({ index, score, changeScore }) => {
  return (
    <div className="counter">
      <button
        className="counter-action decrement"
        onClick={() => changeScore(index, -1)}
      >
        {" "}
        -{" "}
      </button>
      <span className="counter-score">{score}</span>
      <button
        className="counter-action increment"
        onClick={() => changeScore(index, 1)}
      >
        {" "}
        +{" "}
      </button>
    </div>
  );
};

Counter.PropTypes = {
  // check the value is a number
  index: PropTypes.number,
  score: PropTypes.number,
  // check the changeScore is a function type
  changeScore: PropTypes.func,
};

export default Counter;
