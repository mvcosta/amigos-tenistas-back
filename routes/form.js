const express = require("express");
const { check: body } = require("express-validator");

const formControler = require("../controllers/form");

const router = express.Router();

router.get("/player", formControler.getPlayer);
router.post(
  "/player",
  [
    body("name").notEmpty().withMessage("Por favor, preencha seu nome"),
    body("experience")
      .notEmpty()
      .withMessage("Por favor, selecione a sua experiência"),
    body("number").custom((value) => {
      console.log(!/\(\d{2}\)\s\d{5}-\d{4}/g.test(value));
      if (!/\(\d{2}\)\s\d{5}-\d{4}/g.test(value)) {
        console.log("Inside IF!!!");
        throw new Error("Por favor, utilize um número de celular válido");
      }
      return true;
    }),
  ],
  formControler.postPlayer
);

module.exports = router;
