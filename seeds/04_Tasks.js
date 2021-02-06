
exports.seed = function(knex) {
  // Deletes ALL existing entries
  return knex('tasks').del()
    .then(function () {
      // Inserts seed entries
      return knex('tasks').insert([
        {id: 1, task_description: 'Go to hardware store', task_notes: 'take wallet, car keys, id', task_completed: 'false', project_id: 1},
        {id: 2, task_description: 'Notify Trash Company', task_notes: 'large items need to be set aside', task_completed: 'false', project_id: 2},
        {id: 3, task_description: 'Buy Roundup', task_notes: 'make sure its safe', task_completed: 'false', project_id: 3}
      ]);
    });
};
