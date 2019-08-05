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
    let targetColumn = spaces[activeToken.columnLocation];
    let targetSpace = null;

    // loop through using a for...of loop
    for (let space of targetColumn) {
      if (space.token === null) {
        targetSpace = space;
      }
    }

    if (targetSpace !== null) {
      game.ready = false;
      activeToken.drop(targetSpace);

      activeToken.drop(targetSpace, function () {
        game.updateGameState(activeToken, targetSpace);
      });
    }
  }



  /** 
   * Updates game state after token is dropped. 
   * @param   {Object}    token - The token that's being dropped.
   * @param   {Object}    target - Targeted space for dropped token.
   */
  updateGameState(token, target) {
    target.mark(token);

    if (!this.checkForWin(target)) {
      console.log('no win');
      this.switchPlayers();

      if (this.activePlayer.checkTokens()) {
        this.activePlayer.activeToken.drawHTMLToken();
        this.ready = true;
      } else {
        this.gameOver('No more tokens');
      }
    } else {
      console.log('win');
      this.gameOver(`${target.owner.name} wins!`)
    }
  }



  /** 
   * Checks if there a winner on the board after each token drop.
   * @param   {Object}    Targeted space for dropped token.
   * @return  {boolean}   Boolean value indicating whether the game has been won (true) or not (false)
   */

  checkForWin(target) {

    const owner = target.token.owner;
    let win = false;

    // vertical
    for (let x = 0; x < this.board.columns; x++) {
      for (let y = 0; y < this.board.rows - 3; y++) {
        if (this.board.spaces[x][y].owner === owner &&
          this.board.spaces[x][y + 1].owner === owner &&
          this.board.spaces[x][y + 2].owner === owner &&
          this.board.spaces[x][y + 3].owner === owner) {
          win = true;
        }
      }
    }

    // horizontal
    for (let x = 0; x < this.board.columns - 3; x++) {
      for (let y = 0; y < this.board.rows; y++) {
        if (this.board.spaces[x][y].owner === owner &&
          this.board.spaces[x + 1][y].owner === owner &&
          this.board.spaces[x + 2][y].owner === owner &&
          this.board.spaces[x + 3][y].owner === owner) {
          win = true;
        }
      }
    }

    // diagonal
    for (let x = 3; x < this.board.columns; x++) {
      for (let y = 0; y < this.board.rows - 3; y++) {
        if (this.board.spaces[x][y].owner === owner &&
          this.board.spaces[x - 1][y + 1].owner === owner &&
          this.board.spaces[x - 2][y + 2].owner === owner &&
          this.board.spaces[x - 3][y + 3].owner === owner) {
          win = true;
        }
      }
    }

    // diagonal
    for (let x = 3; x < this.board.columns; x++) {
      for (let y = 3; y < this.board.rows; y++) {
        if (this.board.spaces[x][y].owner === owner &&
          this.board.spaces[x - 1][y - 1].owner === owner &&
          this.board.spaces[x - 2][y - 2].owner === owner &&
          this.board.spaces[x - 3][y - 3].owner === owner) {
          win = true;
        }
      }
    }

    return win;
  };


  /** 
   * Switches active player. 
   */

  switchPlayers() {
    for (let player of this.players) {
      player.active = player.active === true ? false : true;
    }
  }

  /** 
   * Displays game over message.
   * @param {string} message - Game over message.      
   */
  gameOver(message) {
    document.getElementById('game-over').style.display = 'block';
    document.getElementById('game-over').textContent = message;
  }





}