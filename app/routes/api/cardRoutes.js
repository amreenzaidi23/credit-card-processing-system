/* Load Modules */
const express = require("express");
const router = express.Router();

/* Load controller */
const CardController = require("../../controller/cardController");
const cardController = new CardController();

/**
 * Car Entity routes
 */

router.get("/", function(req, res) {
  cardController.findAll(res);
});

router.post("/create", function(req, res) {
  cardController.create(req, res);
});

module.exports = router;
