/* Load modules */
const express = require("express");
const app = express();
const bodyParser = require("body-parser");

// Import Path
const path = require("path");

// Static files
app.use(express.static("build"));

/* Database configuration */
const database = require("./app/config/dbconfig");

/* Init database */
database.init();

/* Init server listening */
const port = process.argv[2] || 3000;
app.listen(port, function() {
  console.log("Server listening on port : " + port);
});

/* Express configuration */
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

/* Router configuration */
const REST_API_ROOT = "/api";
app.use(REST_API_ROOT, require("./app/routes/router"));
