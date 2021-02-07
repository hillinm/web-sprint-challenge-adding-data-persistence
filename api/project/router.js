const express = require('express');
const Projects = require('./model.js');
const router = express.Router();

const Middleware = require('../middleware/middleware.js');

router.get('/', Middleware.IntToBoolean(Projects, "project_completed", "get"), (req, res) => {
    const { newObject } = req;
    res.status(200).json(newObject)
});

router.get('/:id', (req, res) => {
    const { id } = req.params;
    Projects.findById(id)
    .then(project => {
        if (project) {
            res.status(200).json(project)
        } else {
            res.status(404).json({message: 'not a valid id'})
        }
    })
    .catch(() => {
        res.status(500).json({message: 'failed to get project by id'})
    })
})

router.post('/', Middleware.IntToBoolean(Projects, "project_completed", "post"), (req, res) => {
    const { newObject } = req;
    res.status(200).json(newObject[0])
});

module.exports = router;
