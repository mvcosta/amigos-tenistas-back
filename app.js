const express = require("express");
const bodyParser = require("body-parser");

const Player = require("./models/Player");
const sequelize = require("./util/database");

const app = express();

const formRoutes = require("./routes/form");

app.use(bodyParser.json());

app.use((req, res, next) => {
  res.setHeader("Access-Control-Allow-Origin", "*");
  res.setHeader("Access-Control-Allow-Methods", "GET, POST, PUT, DELETE");
  res.setHeader("Access-Control-Allow-Headers", "Content-Type, Authorization");
  next();
});

app.use(formRoutes);

sequelize
  .sync()
  .then((result) => {
    console.log(sequelize.models);
    app.listen(8080);
    console.log("Listening on port 8080");
  })
  .catch((err) => {
    console.log(err);
  });
