"use strict";
const Sequelize = require("sequelize");
// import moment js library
const moment = require("moment");

module.exports = (sequelize) => {
  class Article extends Sequelize.Model {
    // create method
    publishedAt() {
      // store the formatted date, set to moment method
      const date = moment(this.createdAt).format("MMMM D, YYYY, h:mma");
      // holds the formatted date
      return date;
    }

    // generate short description
    shortDescription() {
      // if the body length is greater than 200 characters,
      // return character string starting at 0 and ending at 200 with an ellipsis to indicate article is truncated,
      // otherwise return the body desc in full
      const shortDesc =
        this.body.length > 200
          ? this.body.substring(0, 200) + "..."
          : this.body;
      return shortDesc;
    }
  }

  Article.init(
    {
      title: {
        type: Sequelize.STRING,
        validate: {
          notEmpty: {
            msg: '"Title" is required',
          },
        },
      },

      author: Sequelize.STRING,
      body: Sequelize.TEXT,
    },
    { sequelize }
  );

  return Article;
};
