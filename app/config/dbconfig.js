/* Load modules */
let sqlite3 = require("sqlite3").verbose();

/*
 * Database configuration
 */

/* Load database file (Creates file if not exists) */
let db = new sqlite3.Database("./sqlite.db");

/* Init car and driver tables if they don't exist */
let init = function() {
  db.run(
    "CREATE TABLE if not exists card_detail (" +
      "card_num BIGINT PRIMARY KEY NOT NULL," +
      "name TEXT," +
      "balance DOUBLE," +
      "lmt DOUBLE" +
      ")"
  );
};

module.exports = {
  init: init,
  db: db
};
