const Player = require("../models/Player");
const { validationResult } = require("express-validator");

exports.getPlayer = (req, res, next) => {
  res.status(201).json({
    message: "Player!",
  });
};

exports.postPlayer = (req, res, next) => {
  const errors = validationResult(req);

  if (!errors.isEmpty()) {
    console.log(errors.array());
    res.status(422).json({
      message: "Preencha o formulário corretamente!",
    });
    return;
  }

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
