const Sequelize = require("sequelize");

const sequelize = new Sequelize({
  dialect: "sqlite",
  storage: "movies.db",
  // logging: false,
  // global options
  define: {
    freezeTableName: true,
    timestamps: false,
  },
});

const db = {
  sequelize,
  Sequelize,
  models: {},
};

// this file exports the db object, which holds the Sequelize and database configurations,
// as well as all the models

db.models.Movie = require("./models/movie")(sequelize);
// import new model
db.models.Person = require("./models/person")(sequelize);

module.exports = db;
