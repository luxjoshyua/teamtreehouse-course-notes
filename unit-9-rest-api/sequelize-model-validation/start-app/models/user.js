"use strict";
const { Model, DataTypes } = require("sequelize");
const bcrypt = require("bcrypt");

module.exports = (sequelize) => {
  class User extends Model {}
  User.init(
    {
      name: {
        type: DataTypes.STRING,
        // don't allow empty fields
        allowNull: false,
        validate: {
          // notNull validator allows us to customise the allowNull false error; if
          // using notNull, obviously need allowNull false set first
          notNull: {
            // custom error message
            msg: "A name is required",
          },
          notEmpty: {
            msg: "Please provide a name",
          },
        },
      },
      email: {
        type: DataTypes.STRING,
        allowNull: false,
        // define unique constraint
        // checks each email is unique
        // throws a SequelizeUniqueConstraintError
        unique: {
          msg: "The email you entered already exists.",
        },
        validate: {
          notNull: {
            msg: "An email is required",
          },
          // sequelize inbuilt email validator
          isEmail: {
            msg: "Please provide a valid email address",
          },
        },
      },
      birthday: {
        type: DataTypes.DATEONLY,
        allowNull: false,
        validate: {
          notNull: {
            msg: "A birthday is required",
          },
          isDate: {
            msg: "Your birthday must be a valid date.",
          },
        },
      },
      password: {
        // type: DataTypes.STRING,
        // set a virtual field
        type: DataTypes.VIRTUAL,
        allowNull: false,
        validate: {
          notNull: {
            msg: "A password is required",
          },
          notEmpty: {
            msg: "Please provide a password",
          },
          len: {
            args: [8, 20],
            msg:
              "The password should be between 8 and 20 characters in length.",
          },
        },
      },
      // new attribute to check the two passwords
      confirmedPassword: {
        type: DataTypes.STRING,
        allowNull: false,
        // val represents the value being set for confirmedPassword
        set(val) {
          if (val === this.password) {
            const hashedPassword = bcrypt.hashSync(val, 10);
            // updates the underlying data value
            this.setDataValue("confirmedPassword", hashedPassword);
          }
        },
        validate: {
          notNull: {
            msg: "Both passwords must match",
          },
        },
      },
    },
    { sequelize }
  );

  return User;
};
