import React from "react";

const AddPlayerForm = ({ addPlayer }) => {
  // create a DOM reference to the player input, like getElementById.value
  let playerInput = React.createRef();

  let handleSubmit = (e) => {
    e.preventDefault();
    addPlayer(playerInput.current.value);
    // reset the form
    e.currentTarget.reset();
  };

  return (
    <form onSubmit={handleSubmit}>
      <input
        type="text"
        // puts a reference to the input
        ref={playerInput}
        placeholder="Enter a players name"
      />

      <input type="submit" value="Add player" />
    </form>
  );
};

export default AddPlayerForm;
