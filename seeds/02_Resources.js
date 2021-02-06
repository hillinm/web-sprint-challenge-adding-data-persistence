
exports.seed = function(knex) {
  // Deletes ALL existing entries
  return knex('resources').del()
    .then(function () {
      // Inserts seed entries
      return knex('resources').insert([
        {id: 1, resource_name: 'paint', resource_description: 'White'},
        {id: 2, resource_name: 'gloves', resource_description: 'Plactic'},
        {id: 3, resource_name: 'weed killer', resource_description: 'Dangerous'}
      ]);
    });
};
