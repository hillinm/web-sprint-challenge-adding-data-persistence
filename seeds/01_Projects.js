
exports.seed = function(knex) {
  // Deletes ALL existing entries
  return knex('projects').del()
    .then(function () {
      // Inserts seed entries
      return knex('projects').insert([
        {id: 1, project_name: 'Clean Garage', project_description: 'Get rid of all the old stuff and trash', project_completed: false},
        {id: 2, project_name: 'Paint the Shed', project_description: 'Painting the shed the same color as the house', project_completed: false},
        {id: 3, project_name: 'Pull Weeds', project_description: 'Around the house and in the flower beds out back', project_completed: false}
      ]);
    });
};
