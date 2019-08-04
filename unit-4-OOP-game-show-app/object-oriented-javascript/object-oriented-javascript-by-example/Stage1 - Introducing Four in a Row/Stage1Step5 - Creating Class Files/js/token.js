class Token {

  constructor(index, owner) {
    // holds a reference to the player that owns the object
    this.owner = owner;
    // each token id needs to be unique
    // on every iteration, a new token is generated
    this.id = `token-${index}-${owner.id}`;
    this.dropped = false;
    // tells us which column of the board a token is in at any given time
    // initially set to 0, because all tokens first appear in the left most column on the board
    this.columnLocation = 0;
  }


  /**
   * Draws new HTML token
   */
  drawHTMLToken() {
    // create new div element, save it to a variable
    const token = document.createElement('div');
    // append the new div element
    document.getElementById('game-board-underlay').appendChild(token);
    // set the id attribute
    token.setAttribute('id', this.id);
    // set the class attributethi
    token.setAttribute('class', 'token');
    token.style.backgroundColor = this.owner.color;
  }

  // getter method
  get htmlToken() {
    return document.getElementById('game-board-underlay');
  }


  /** 
   * Gets left offset of html element.
   * @return  {number}   Left offset of token object's htmlToken.
   */
  get offsetLeft() {
    // this method returns the value of the offsetLeft property of the htmlToken
    // htmlToken goes before offsetLeft because you're finding the value of the token
    return this.htmlToken.offsetLeft;
  }


  /** 
   * Moves html token one column to left.
   */
  moveLeft() {
    // if the token is greater than 0px from the left, do something
    // the column location is set in the constructor
    // stop the player moving the token less than 0, because the token would then be floating on the screen off the board
    if (this.columnLocation > 0) {
      // update the position of the HTML token element
      // 76px is the full width of a column
      this.htmlToken.style.left = this.offsetLeft - 76;
      // update the column location property
      // whatever its current value, subtract 1 from it to signify the token
      // has moved one column to the left
      this.columnLocation -= 1;
    }
  }


  /** 
   * Moves html token one column to right
   * @param   {number}    columns - number of columns on the game board    
   */
  moveRight(columns) {

    // only allow the htmlToken to move right if it's not in the last (rightmost) column
    // so this says, the last column, but minus one
    if (this.columnLocation < columns - 1) {
      // To move the htmlToken right, the left position of the element should be updated so its value is
      // equal to 76 pixels more than the offsetLeft value.
      // this moves the HTML token further to the right on the board, because you plus 76px to its current location
      this.htmlToken.style.left = this.offsetLeft + 76;
      // If the htmlToken moves right, the Token object's columnLocation property should be increased by one.
      this.columnLocation += 1;
    }
  }


  /** 
   * Drops html token into targeted board space.
   * @param   {Object}   target - Targeted space for dropped token.
   * @param   {function} reset  - The reset function to call after the drop animation has completed.
   */

  drop(target, reset) {
    // The dropped property of the Token should be set to true.
    this.dropped = true;
    // Use jQuery to animate the htmlToken falling into the target space.
    // select the htmlToken
    $(this.htmlToken).animate({
      // the target is the space the token is being dropped into
      // this says where it is on the y axis times the diameter(76pixels)
      // this then gives the correct location to animate in
      top: (target.y * target.diameter)
    }, 750, 'easeOutBounce', reset);
  };

}