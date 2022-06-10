exports.getPlayer = (req, res, next) => {
  res.status(201).json({
    message: "Player!",
  });
};

exports.postPlayer = (req, res, next) => {
  res.status(201).json({
    message: "User saved!",
    player: {
      id: new Date().toISOString(),
      name: req.body.name,
      number: req.body.number,
      experience: req.body.experience,
    },
  });
};
