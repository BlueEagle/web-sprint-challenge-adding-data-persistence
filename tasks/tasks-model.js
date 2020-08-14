const db = require("../data/db-config");

module.exports = {
  get,
  insert,
};

function get() {
  // should include project name and description, may need to get db data from other table and select columns
  return db("tasks")
    .join("projects", "projects.id", "=", "tasks.project_id")
    .select(
      "tasks.*",
      "projects.name as project_name",
      "projects.description as project_description"
    );
}

function insert(task) {
  return db("tasks").insert(task);
}
