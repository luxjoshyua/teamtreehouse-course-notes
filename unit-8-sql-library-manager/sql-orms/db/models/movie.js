const Sequelize = require("sequelize");

module.exports = (sequelize) => {
  class Movie extends Sequelize.Model {}
  Movie.init(
    {
      // set id propery to the Model attributes object
      // the id acts as a 'primary key', or a unique indexable reference for each entry
      id: {
        type: Sequelize.INTEGER,
        // tells Sequelize to generate the primary key column using the property name
        // defined in the model (in this case it's id, but could be anything, like 'identifier')
        primaryKey: true,
        // automatically increments by 1 for each new entry
        autoIncrement: true,
      },
      title: {
        type: Sequelize.STRING,
        // disallow null value
        // if a field is empty, Sequelize will throw validation error
        // if you want to allow null values, set to true
        allowNull: false,
        // prevent value from being set to an empty string
        validate: {
          // notEmpty: true,
          notNull: {
            msg: 'Please provide a value for "title"',
          },
          notEmpty: {
            // custom error message
            msg: 'Please provide a value for "title"',
          },
        },
      },
      runtime: {
        type: Sequelize.INTEGER,
        // disallow null value
        allowNull: false,
        validate: {
          notNull: {
            msg: 'Please provide a value for "runtime"',
          },
          // checks if number value is greater than or equal to a given number
          // min: {
          // args represents the value (argument) passed to the validator
          // the value you specify is used to check if a column is valid or invalid
          // in this case, if the runtime value is less than the arg(1), it will throw validation error
          // args: 1,
          // msg: 'Please provide a value greater than "0" for "runtime" ',
          //  },
        },
      },
      // DATE: yyyy-mm-dd hh:mm:ss
      // DATEONLY: yyyy-mm-dd (date without time)
      releaseDate: {
        type: Sequelize.DATEONLY,
        // disallow null value
        allowNull: false,
        validate: {
          notNull: {
            msg: 'Please provide a value for "releaseDate"',
          },
          // isAfter validator checks that a date string holds a date value that is after (or equal to) a given date
          // isAfter: {},
        },
      },
      isAvailableOnVHS: {
        type: Sequelize.BOOLEAN,
        // disallow null value
        allowNull: false,
        // sets the default entry value to false
        defaultValue: false,
        validate: {
          notNull: {
            msg: "Please provide a value for 'isAvailableOnVHS'",
          },
        },
      },
    },
    // Model options object
    {
      // disable timestamps
      // timestamps: false,
      // disable plural table names
      // changes the table name from Movies to Movie
      freezeTableName: true,
      // set model name to 'movie'; table name will be 'movies'
      modelName: "movie",
      // table name change
      tableName: "my_movies_table",
      // enable soft deletes
      paranoid: true,
      sequelize,
    }
  );
  return Movie;
};
