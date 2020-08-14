exports.seed = function (knex) {
  // Deletes ALL existing entries
  return knex("resources")
    .del()
    .then(function () {
      // Inserts seed entries
      return knex("resources").insert([
        { id: 1, name: "time" },
        { id: 2, name: "buses" },
        { id: 3, name: "money" },
        { id: 4, name: "friends" },
        { id: 5, name: "computer" },
        { id: 6, name: "game knowlege" },
      ]);
    });
};
