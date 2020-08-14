const db = require("../data/db-config");

module.exports = {
  get,
  insert,
};

function get() {
  return db("resources");
}

function insert(resource) {
  return db("resources").insert(resource);
}
