/**
 * Express Router configuration
 */
const express = require("express");
const router = express.Router();

/* API routes */
router.use("/card", require("./api/cardRoutes"));

module.exports = router;
