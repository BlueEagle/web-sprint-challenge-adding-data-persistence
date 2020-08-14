exports.seed = function (knex) {
  // Deletes ALL existing entries
  return knex("tasks")
    .del()
    .then(function () {
      // Inserts seed entries
      return knex("tasks").insert([
        { id: 1, description: "Task: 1", project_id: 1 },
        { id: 2, description: "Task: 2", project_id: 1 },
        { id: 3, description: "Task: 3", project_id: 1 },
        { id: 4, description: "Task: 1", project_id: 2 },
        { id: 5, description: "Task: 2", project_id: 2 },
        { id: 6, description: "Task: 3", project_id: 2 },
        { id: 7, description: "Task: 1", project_id: 3 },
        { id: 8, description: "Task: 2", project_id: 3 },
        { id: 9, description: "Task: 3", project_id: 3 },
      ]);
    });
};
