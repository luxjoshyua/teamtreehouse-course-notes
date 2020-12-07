const { Sequelize } = require("sequelize");
const db = require("./db");
const { Movie, Person } = db.models;

(async () => {
  await db.sequelize.sync({ force: true });

  try {
    // instance
    const movie = await Movie.create({
      title: "Toy Story",
      runtime: 81,
      releaseDate: "1995-11-22",
      isAvailableOnVHS: true,
    });
    // console.log(movie.toJSON());

    // instance
    const movie2 = await Movie.create({
      title: "The Incredibles",
      runtime: 115,
      releaseDate: "1895-12-28",
      isAvailableOnVHS: true,
    });

    // console.log(movie2.toJSON());

    // new instance using build
    // need to save()
    const movie3 = await Movie.build({
      title: "Toy Story 3",
      runtime: 103,
      releaseDate: "2010-06-18",
      isAvailableOnVHS: false,
    });
    // save the instance/record
    await movie3.save();
    // console.log(movie3.toJSON());

    // instance
    const movie4 = await Movie.create({
      title: "Scarface",
      runtime: 220,
      releaseDate: "1984-03-22",
      isAvailableOnVHS: true,
    });

    // console.log(movie4.toJSON());

    const movie5 = await Movie.create({
      title: "Kill Bill: Volume 1",
      runtime: 140,
      releaseDate: "2003-10-16",
      isAvailableOnVHS: true,
    });
    // console.log(movie5.toJSON());

    // instance
    const person = await Person.create({
      firstName: "Robert",
      lastName: "DeNiro",
      age: 94,
    });
    // console.log(person.toJSON());

    // instance
    const person2 = await Person.create({
      firstName: "Tom",
      lastName: "Hanks",
      age: 101,
    });
    // console.log(person2.toJSON());

    // findByPk() find by primary key method
    const movieById = await Movie.findByPk(1);
    // console.log(movieById.toJSON());

    // findOne() method
    const movieByRuntime = await Movie.findOne({
      where: {
        runtime: 115,
      },
    });

    // console.log(movieByRuntime.toJSON());

    // findAll() method
    // retrieves a collection of all records instead of a single instance
    // const movies = await Movie.findAll();
    // map over each instance in the array and convert to JSON
    // console.log(movies.map((movie) => movie.toJSON()));

    // filter results on the findAll() method using where
    const people = await Person.findAll({
      where: {
        lastName: "Hanks",
      },
    });
    // console.log(people.map((person) => person.toJSON()));

    // use where for more complex AND conditions
    const movies = await Movie.findAll({
      where: {
        runtime: 92,
        isAvailableOnVHS: true,
      },
    });
    // SELECT * FROM Movies WHERE runtime = 92 AND isAvailableOnVHS = true;
    // console.log(movies.map((movie) => movie.toJSON()));
  } catch (error) {
    // console.error("Error connecting to the database: ", error);
    if (error.name === "SequelizeValidationError") {
      // map over the error(s) and return an array holding any error messages
      const errors = error.errors.map((err) => err.message);
      console.error("Validation errors: ", errors);
    } else {
      // rethrow other types of errors caught by catch
      throw error;
    }
  }
})();
