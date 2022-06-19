const Player = require("../models/Player");
const { validationResult } = require("express-validator");

exports.getPlayer = (req, res, next) => {
  res.status(201).json({
    message: "Player!",
  });
};

exports.postPlayer = (req, res, next) => {
  const validationErrors = validationResult(req);

  if (!validationErrors.isEmpty()) {
    console.log(validationErrors.array());
    const error = new Error("Por favor, preencha o formulário corretamente");
    error.statusCode = 422;
    throw error;
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
      if (!err.statusCode) {
        err.statusCode = 500;
      }
      next(err);
    });
  res.status(201).json({
    message: "User saved!",
  });
};
