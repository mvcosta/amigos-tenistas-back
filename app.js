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

app.use((error, req, res, next) => {
  console.log(error);
  const status = error.statusCode || 500;
  const message = error.message;
  res.status(status).json({ message: message });
});

sequelize
  .sync()
  .then((result) => {
    app.listen(8080);
    console.log("Listening on port 8080");
  })
  .catch((err) => {
    console.log(err);
  });
