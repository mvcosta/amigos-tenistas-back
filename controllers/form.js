const Player = require("../models/Player");

exports.getPlayer = (req, res, next) => {
  res.status(201).json({
    message: "Player!",
  });
};

exports.postPlayer = (req, res, next) => {
  Player.create({
    name: req.body.name,
    number: req.body.number,
    experience: req.body.experience,
  })
    .then((result) => {
      console.log(result);
    })
    .catch((err) => {
      console.log(err);
    });
  res.status(201).json({
    message: "User saved!",
  });
};
