const Sequelize = require("sequelize");

// Connect to a SQLite database
// the variable sequelize now holds a Sequelize instance you can interact with
// You initialise the database connection by passing the Sequelize()
// constructor an object with connection parameters
const sequelize = new Sequelize({
  // specify the specific version of SQL we're using
  dialect: "sqlite",
  // specify the file path or the storage engine for SQLite
  // the value movies.db will create a database in your project named 'movies'
  storage: "movies.db",
  // disable SQL logging
  // logging: false,
});

/* Movie model
 the extends keyword is used to create a subclass, or a child of another class
  in this case we're extending from Sequelize.Model
 */
// class Movie extends Sequelize.Model {}

/* Initialise a model by calling init
  Movie.init() defines a new table in the database with the name 'Movies'.
  Sequelize will look for information in the Movies table
*/
Movie.init(
  {
    title: Sequelize.STRING,
  },
  // can also write this just sequelize because the object property is the same name as the sequelize variable defined above
  { sequelize: sequelize }
);

// async immediately invoked function expression (IIFE)
/* 
  Inside an async function, you use the await keyword to wait for a Promise.
  For example, Sequelize's authenticate() function returns a promise that 
  resolves to a successful, authenticated connection to the database.
*/
(async () => {
  // Sync Movies table
  // await Movies.sync();
  // Sync all tables
  // force: true lets you control the database synchronisation
  // in dev mode, you probably want to refresh the database tables
  // each time you start the app, hence use the force parameter
  await sequelize.sync({ force: true });

  try {
    /*
    // Instance of the movie class represents a database row
    const movie = await Movie.create({
      title: "Toy Story",
    });
    // converts the instance to json
    console.log(movie.toJSON());
    // new movie
    const movie2 = await Movie.create({
      title: "The Incredibles",
    });
    console.log(movie2.toJSON());

    // new movie
    const movie3 = await Movie.create({
      title: "Scarface",
    });
    console.log(movie3.toJSON());

    // can create new records without declaring variables,
    // just did that so we could log to the console
    await Movie.create({
      title: "Toy Story 2",
    });

    await Movie.create({
      title: "Harry Potter and the Prisoner of Azkaban",
    });
    */

    // wrap in a Promise.all, which waits until all promises
    // returned by the model .create() method are fulfilled
    // note how it is objects inside an array
    const movieInstances = await Promise.all([
      Movie.create({
        title: "Toy story",
      }),
      Movie.create({
        title: "The Incredibles",
      }),
      Movie.create({
        title: "Scarface",
      }),
      Movie.create({
        title: "Toy Story 2",
      }),
      Movie.create({
        title: "Harry Potter and the Prisoner of Azkaban",
      }),
    ]);

    const moviesJSON = movieInstances.map((movie) => movie.toJSON());
    console.log(moviesJSON);

    // test you can connect to the database
    // await sequelize.authenticate();
    console.log("successful connection to the database");
  } catch (error) {
    console.error("Error connecting to the database: ", error);
  }
})();
