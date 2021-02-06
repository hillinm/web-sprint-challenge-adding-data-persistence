
exports.up = function(knex) {
  return knex.schema
  .createTable('projects', tbl => {
      tbl.increments();
      tbl.string('project_name').notNullable();
      tbl.string('project_description').notNullable();
      tbl.boolean('project_completed').default(false);
  })
  .createTable('tasks', tbl => {
      tbl.increments();
      tbl.string('task_description').notNullable();
      tbl.string('task_notes');
      tbl.boolean('task_completed').default(false);
      tbl.integer('project_id').unsigned().references('projects.id')
      .onUpdate('CASCADE')
      .onDelete('CASCADE');
  })
  .createTable('resources', tbl => {
      tbl.increments();
      tbl.string('resource_name').unique().notNullable();
      tbl.string('resource_description');
  })
  .createTable('project_resources', tbl => {
      tbl.integer('resource_id').unsigned().references('resources.id')
      .onUpdate('CASCADE')
      .onDelete('CASCADE');
      tbl.integer('project_id').unsigned().references('projects.id')
      .onUpdate('CASCADE')
      .onDelete('CASCADE');
      tbl.primary(['projects_id', 'resource_id'])
  });
};

exports.down = function(knex) {
  return knex.schema
    .dropTableIfExists('projects')
    .dropTableIfExists('tasks')
    .dropTableIfExists('resources')
    .dropTableIfExists('project_resources');
};
