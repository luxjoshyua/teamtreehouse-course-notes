class Token {

  constructor(index, owner) {
    // holds a reference to the player that owns the object
    this.owner = owner;
    // each token id needs to be unique
    // on every iteration, a new token is generated
    this.id = `token-${index}-${owner.id}`;
    this.dropped = false;
    
  }

}
