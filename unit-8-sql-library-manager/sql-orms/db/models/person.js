const Sequelize = require("sequelize");

module.exports = (sequelize) => {
  // define a new model
  class Person extends Sequelize.Model {}

  Person.init(
    {
      firstName: {
        type: Sequelize.STRING,
        allowNull: false,
        validate: {
          notNull: {
            msg: "Please provide a value for 'firstName'",
          },
          notEmpty: {
            msg: 'Please provide a value for "firstName"',
          },
        },
      },
      lastName: {
        type: Sequelize.STRING,
        allowNull: false,
        validate: {
          notNull: {
            // set a custom message when validation fails
            msg: "Please provide a value for 'lastName'",
          },
          notEmpty: {
            msg: 'Please provide a value for "firstName"',
          },
        },
      },
      age: {
        type: Sequelize.INTEGER,
      },
      // don't forget this part!!!!!
    },
    { sequelize }
  );

  return Person;
};
