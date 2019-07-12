class Rectangle {
    constructor(width, length) {
        this.width = width;
        this.length = length;
    }

    /* Step One: Create a getter method called area that calculates the area of the rectangle. 
    The formula for the area of rectangle is area = length * width.
    */
    get area() {

        /* We use the `this` keyword inside the getter method, because when we call the getter method on a given object 
        (by using dot or bracket notation) we're asking the method to calculate the area based on that object's own values.
        The `this` keyword helps the method understand what values it's working with. 
        */
        return this.width * this.length;
    }

}

const rect1 = new Rectangle(10, 5);
const rect2 = new Rectangle(6, 12);
const rect3 = new Rectangle(15, 20);

/* Step Two: Create an array called areas with three elements so that the first element (areas[0]) holds the value of the area property of rect1, 
the second element holds the value of the area property of rect2, and the third element holds the value of the area property of rect3
*/

areas = [rect1.area, rect2.area, rect3.area];



// Challenge Two

/* Step One:

These do not need to be backing properties.
For the purposes of this challenge, use 3.14 to represent π. 
The formula for circumference is circumference = 2*π*radius, the formula for area is area = π*r^2.

*/

class Circle {

    // 1. Create a setter method called radius inside the Circle class.
    set radius(radius) {
        // 2. This method should store the value of the radius using a backing property, _radius. 
        this._radius = radius;

        // 3. It should also set two additional properties on the Circle class: area, and circumference. 

        // the formula for circumference is circumference = 2*π*radius
        this.circumference = 2 * 3.14 * this._radius;

        // the forumula for area is π * r^2 (r represents radius)
        this.area = 3.14 * Math.pow(radius, 2);
    }


    // Step Two: create a getter method called radius that returns the value of the backing property _radius.
    get radius() {
        return this._radius; 
    }
    
}

const circ = new Circle();