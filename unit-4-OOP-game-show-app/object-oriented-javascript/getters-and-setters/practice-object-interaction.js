// Book.js
class Book {
    constructor(title, author, isbn) {
        this.title = title;
        this.author = author;
        this.isbn = isbn;
        this.patron = null;
        this.dueDate = null;
        // represents if a book has been taken out
        this._out = false;
    }

    // Add a setter method called out() to the Book class. It should receive one argument, a boolean value.
    set out(out) {
        // Inside the setter method, set the value of the _out backing property to the parameter.
        // We use an _underscore to indicate that it's a backing property.
        // Backing properties are used when a property is meant to be updated with a setter method.
        // We can't use the word `out` for the name of the property because our setter method will be called `out`
        this._out = out;

        // Then, inside the setter method, check the value of the _out backing property.
        // If it 's true, calculate the due date and set the Book object's dueDate property.
        if (out) {
            const newDueDate = new Date();
            newDueDate.setDate(newDueDate.getDate() + 14);
            this.dueDate = newDueDate;
        }
        // If it 's false, set the dueDate property to null.
        else {
            this.dueDate = null;
        }
    }

    // Add a getter method to the Book class called out(). It should return the value of the _out backing property.
    get out() {
        return this._out;
    }

}

// Library.js
class Library {
    constructor() {
        this.books = [];
        this.patrons = [];
        this.dailyFine = .1;
    }

    addBook(book) {
        this.books.push(book)
    }

    addPatron(patron) {
        this.patrons.push(patron);
    }

    chargeFines() {
        const now = new Date();

        /* create a new variable called latePatrons. latePatrons is assigned to what's returned from the filter() method
        when it's called on the Library's array of patron objects.

        the condition (patron.currentBook !== null && patron.currentBook.dueDate < now) is checking to make sure that the patron's
        currentBook property is not null, and that the checked out book's due date is less than today, indicating the book is late. */
        const latePatrons = this.patrons.filter(patron =>
            (patron.currentBook !== null && patron.currentBook.dueDate < now)
        );

        /*
        once we have our filtered array, we can use a for...of loop to charge a fine to each patron by increasing the value of their
        balance property by the dailyFine amount times the number of days the book is late
        */

        for (let patron of latePatrons) {
            const dateDiff = new Date(now - patron.currentBook.dueDate);
            const daysLate = dateDiff.getDate();
            patron.balance += this.dailyFine * daysLate;
        }
        
    }



}


// Patron.js
class Patron {
    constructor(name, email) {
        this.name = name;
        this.email = email;
        this.currentBook = null;
    }




    // throughout the patron class methods, `this` refers to the patron instance which the method was (will be) called on.

    /* think of the class `Patron` like a blueprint for making an object, while the `this` keyword is a reference to a specific object,
    which happens to be an instance of that class */

    /* The `this` keyword is solely based on context and when `this` is used in a method that is inside of an object,
     it refers to the class you made. Then you can further access its properties with dot notation. */

    // receives one argument; a book object
    checkOut(book) {
        // It should update the currentBook property to the Book object that's passed in.
        this.currentBook = book;

        // It should update that Book object's out property to true.
        book.out = true;

        // It should update that Book object's patron property to the Patron object itself
        // book.patron = this; assigns the current patron instance to the 'patron' property inside the book that is being checked out
        book.patron = this; // `this` when used by itself inside a class refers to the entire object

        // It should calculate the due date (14 days in the future) and then set the Book object's dueDate property to that due date.
        // new Date() creates a new JavaScript Date object
        // const newDueDate = new Date();
        // getDate() returns the day of the month (from 1 to 31) for the specified date
        // newDueDate.setDate(newDueDate.getDate() + 14);
        // book.dueDate = newDueDate;

    }

    // receives one argument; a book object
    returnBook(book) {

        // It should update the currentBook property to null
        this.currentBook = null;

        // It should update that Book object's out property to false
        book.out = false;

        // It should update that Book object's patron property to null
        book.patron = null;

        // It should update that Book object's dueDate property to null
        // book.dueDate = null;
    }
}