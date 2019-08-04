class Space {
  // x and y properties represent the column and row, respectively, of the space's location on the board
  // the id property gives us a way to identify the space when it's drawn on our HTML to be seen in browser
  // the token property, initially set to null, is a way to associate a Token object with the space it's dropped into
  constructor(x, y, id, token) {
    this.x = x;
    this.y = y;
    // template literals make it easy to create string values that use variables inside the string
    this.id = `space-${x}-${y}`;
    // token property is a way to represent whether a given space is holding a token aka it's a way to tell whether a token
    // has been dropped into that given space
    this.token = null; 
    // eventually when a token is dropped into a Space, the value for that Space's token property
    // will be set to the token object the space contains
    this.diameter = 76;
    this.radius = this.diameter / 2; 
  }


  drawSVGSpace() {
    const svgSpace = document.createElementNS("http://www.w3.org/2000/svg", "circle");
    svgSpace.setAttributeNS(null, "id", this.id);
    svgSpace.setAttributeNS(null, "cx", (this.x * this.diameter) + this.radius);
    svgSpace.setAttributeNS(null, "cy", (this.y * this.diameter) + this.radius);
    svgSpace.setAttributeNS(null, "r", this.radius - 8);
    svgSpace.setAttributeNS(null, "fill", "black");
    svgSpace.setAttributeNS(null, "stroke", "none");
    // attach the completed svgSpace element to the DOM
    document.getElementById("mask").appendChild(svgSpace);
  }

};