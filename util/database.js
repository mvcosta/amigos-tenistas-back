const Sequelize = require("sequelize");

const sequelize = new Sequelize(
  "amigos-tenistas",
  "postgres",
  "refute0unbar5stony-expedite",
  { host: "localhost", dialect: "postgres" }
);

module.exports = sequelize;
