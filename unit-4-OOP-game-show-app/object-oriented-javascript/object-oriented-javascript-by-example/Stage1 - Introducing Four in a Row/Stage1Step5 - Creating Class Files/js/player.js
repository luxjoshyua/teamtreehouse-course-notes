class Player {

  // constructor method
  // always need to pass the parameters to the method
  constructor(name, id, color, active = false) {
    this.name = name;
    this.id = id;
    // differentiate the player
    this.color = color;
    // check if player is active
    this.active = active;
    // instantiate a new object

    // using this[e.g.createTokens] indicates that the method we want to call is available on the object we're initialising 
    // 21 is passed as the argument because it's equal to half the number of spaces on the board
    // each player gets 21 tokens total
    this.tokens = this.createTokens(21);
  }


  /* this documentation follows the correct structure for documenting a method in a class - https://devdocs.io/jsdoc/
    1. quick description
    2. describes arguments received and what they do
  */

  /**
   * Creates token objects for player 
   * @param   {integer}   num - Number of token objects to be created
   * @return  {array}     tokens - an array of new token objects
   */

  // num is the argument that represents the number of tokens to be created
  createTokens(num) {
    // empty array 
    const tokens = [];
    // use a loop to generate a new Token object on each iteration (up to num iterations)
    // be sure to pass in the appropriate arguments to the Token constructor method
    // the loop iterates num times
    for (let i = 0; i < num; i++) {
      // create variable token, set it equal to a new Token object
      let token = new Token(i, this);
      // add the newly created token to the token array using push() method
      tokens.push(token);
    }
    // when the loop is finished and all the tokens have been created, return the array
    return tokens; 
  }

}