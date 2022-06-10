const express = require("express");

const formControler = require("../controllers/form");

const router = express.Router();

router.get("/player", formControler.getPlayer);
router.post("/player", formControler.postPlayer);

module.exports = router;
