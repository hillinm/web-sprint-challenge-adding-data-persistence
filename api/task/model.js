const db = require('../../data/dbConfig.js');

module.exports = {
    find,
    findById,
    addTask
}

function find() {
    return db('tasks')
}

function findById(id) {
    return db('tasks')
    .where({id})
    .first()
}

function addTask(task) {
    return db('tasks')
    .insert(task, 'id')
    .then(([id]) => find().where({id}));
}
