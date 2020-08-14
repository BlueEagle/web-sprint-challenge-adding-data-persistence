exports.up = function (knex) {
  return knex.schema
    .createTable("projects", (tbl) => {
      tbl.increments("id");
      tbl.string("name", 255).notNullable().index(); // may need to be unique
      tbl.text("description");
      tbl.boolean("completed").defaultTo(false);
    })
    .createTable("tasks", (tbl) => {
      tbl.increments("id");
      tbl.text("description").notNullable();
      tbl.text("notes");
      tbl.boolean("completed").defaultTo(false);
      tbl
        .integer("project_id")
        .unsigned()
        .notNullable()
        .references("projects.id")
        .onDelete("RESTRICT")
        .onUpdate("CASCADE");
    })
    .createTable("resources", (tbl) => {
      tbl.increments("id");
      tbl.string("name", 255).notNullable().index();
      tbl.text("description");
    })
    .createTable("projects_resources", (tbl) => {
      tbl.increments("id");
      tbl
        .integer("project_id")
        .unsigned()
        .notNullable()
        .references("projects.id")
        .onDelete("RESTRICT")
        .onUpdate("CASCADE");
      tbl
        .integer("resource_id")
        .unsigned()
        .notNullable()
        .references("resource.id")
        .onDelete("RESTRICT")
        .onUpdate("CASCADE");
    });
};

exports.down = function (knex) {
  return knex.schema
    .dropTableIfExists("projects_resources")
    .dropTableIfExists("tasks")
    .dropTableIfExists("resources")
    .dropTableIfExists("projects");
};
