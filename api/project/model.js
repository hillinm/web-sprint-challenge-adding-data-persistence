const db = require('../../data/dbConfig.js');

module.exports = {
    find,
    findById,
    addProject
}

function find() {
    return db('projects')
}

function findById(id) {
    return db('projects')
    .where({id})
    .first()
}

function addProject(project) {
    return db('projects')
    .insert(project)
    .then(() => {
        return project
    })
}
