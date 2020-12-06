const { Sequelize } = require("sequelize");
const db = require("./db");
const { Movie } = db.models;

(async () => {
  await db.sequelize.sync({ force: true });

  try {
    const movie = await Movie.create({
      title: "Toy Story",
      runtime: 81,
      releaseDate: "1995-11-22",
      isAvailableOnVHS: true,
    });
    console.log(movie.toJSON());

    const movie2 = await Movie.create({
      title: "The Incredibles",
      runtime: 115,
      releaseDate: "1895-12-28",
      isAvailableOnVHS: true,
    });

    console.log(movie2.toJSON());
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
