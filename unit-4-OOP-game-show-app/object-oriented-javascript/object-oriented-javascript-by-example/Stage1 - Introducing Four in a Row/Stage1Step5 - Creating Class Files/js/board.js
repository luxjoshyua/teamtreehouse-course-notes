class Board {
    // no arguments are passed, because each game has 1 statically generated board
    constructor() {
        this.rows = 6;
        this.columns = 7;
        // when board is created, all the space objects are created too through this method call
        this.spaces = this.createSpaces();
    }

    /** 
     * Generates 2D array of spaces. 
     * @return  {Array}     An array of space objects
     */
    createSpaces() {
        // holds an empty array, this variable will eventually be returned from the method
        const spaces = [];
        // for loop that iterates through the number of columns
        for (let x = 0; x < this.columns; x++) {
            // new variable that holds an array of the individual space objects in that column
            const column = [];
            // on each iteration through the loop, a new space is added to the row
            for (let y = 0; y < this.rows; y++) {
                const space = new Space(x, y);
                column.push(space);
            }
            // once the loop is finished, push the column back into the spaces array (remember it was set up empty at the top, ready to be filled!)
            spaces.push(column);
        }
        return spaces;
    }


    /**
     * Draws associated SVG spaces for all game spaces
     */
    drawHTMLBoard() {
        // iterate through the 2d array of space objects
        // for of is like saying for each element of an array
        for (let column of this.spaces) {
            for (let space of column) {
                // call the drawSVGSpace() method on each space object
                space.drawSVGSpace();
            }
        }
    }
}