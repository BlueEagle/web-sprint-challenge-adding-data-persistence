exports.seed = function (knex) {
  // Deletes ALL existing entries
  return knex("projects_resources")
    .del()
    .then(() => {
      return knex("resources")
        .del()
        .then(() => {
          return knex("tasks")
            .del()
            .then(() => {
              return knex("projects").del();
            });
        });
    });
};

// exports.seed = function (knex) {
//   // Deletes ALL existing entries
//   return knex("resources").del();
// };

// exports.seed = function (knex) {
//   // Deletes ALL existing entries
//   return knex("tasks").del();
// };

// exports.seed = function (knex) {
//   // Deletes ALL existing entries
//   return knex("projects").del();
// };
