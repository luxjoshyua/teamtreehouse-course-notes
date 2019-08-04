class Game {

  constructor() {
    this.board = new Board();
    this.players = this.createPlayers();
    // represents the game's ready state, initially set to false
    this.ready = false;
  }

  /**
   * Returns active player
   * @return {Object} player - The active player. 
   */
  get activePlayer() {
    // find returns the first element that passes the test, not every one like in filter()
    return this.players.find(player => player.active);
  }

  /** 
   * Creates two player objects
   * @return  {Array}    An array of two Player objects.
   */
  createPlayers() {
    const players = [
      new Player('Player 1', 1, '#e15258', true),
      new Player('Player 2', 2, '#e59a13')
    ]

    return players;
  }


  /*
   * Gets game ready for play
   */
  startGame() {
    // Call the drawHTMLBoard() method on an object
    // Once this step happens, the game's board will be drawn in the browser
    this.board.drawHTMLBoard();
    // Call the drawHTMLToken() method on the activeToken.
    this.activePlayer.activeToken.drawHTMLToken();
    // Change the value of the Game object's ready property to true.
    this.ready = true;
  }


  /**
   * Branches code, depending on what key player presses
   * @param   {Object}    e - Keydown event object
   */
  // handleKeydown()
  // * the event object is the argument; remember, it can be called whatever you want, doesn't have to be e
  handleKeydown(e) {

    // test if the game is ready
    if (this.ready) {
      // check if the key value is left arrow
      // event object's key property, this property returns a string of the name of the key that was pressed
      if (e.key === 'ArrowLeft') {
        // move token left
        // call the moveLeft method on the active token
        this.activePlayer.activeToken.moveLeft();
      }
      // check if the key value is right arrow
      else if (e.key === 'ArrowRight') {
        // move token right
        // call the moveRight method on the active token
        this.activePlayer.activeToken.moveRight(this.board.columns);
      }
      // check if the key value is down arrow
      else if (e.key === 'ArrowDown') {
        // play token
        this.playToken(); 
      }

    }

  };



  playToken() {
    // select the spaces
    let spaces = this.board.spaces; 
    // select the active token
    let activeToken = this.activePlayer.activeToken; 
  
    // iterate through the Space objects in the target column and identify the target Space

    for ( let i = 0; i < this.columnLocation.this.spaces; i++) {

    }
    



  }

}