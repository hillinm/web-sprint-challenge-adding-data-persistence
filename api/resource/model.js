const db = require('../../data/dbConfig.js');

module.exports = {
    find,
    findById,
    addResource
}

function find() {
    return db('resources')
}

function findById(id) {
    return db('resources')
    .where({id})
    .first()
}

function addResource(resource) {
    return db('resources')
    .insert(resource, 'id')
    .then(([id]) => find().where({id}));
}