exports.seed = function (knex) {
  // Deletes ALL existing entries
  return knex("projects")
    .del()
    .then(function () {
      // Inserts seed entries
      return knex("projects").insert([
        { id: 1, name: "Camping Supply Site" },
        { id: 2, name: "Sudoku Solver" },
        { id: 3, name: "Bus Rental Service" },
      ]);
    });
};
