const db = require("../data/db-config");

module.exports = {
  get,
  insert,
};

function get() {
  return db("projects");
}

function insert(project) {
  return db("projects").insert(project);
}
