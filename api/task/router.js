// build your `/api/tasks` router here
const express = require('express');
const Tasks = require('./model.js');
const router = express.Router();

const Middleware = require('../middleware/middleware.js');

router.get('/', Middleware.IntToBoolean(Tasks, "task_completed", "get"), (req, res) => {
    const { newObject } = req;
    res.status(200).json(newObject)
});

router.get('/:id', (req, res) => {
    const { id } = req.params;
    Tasks.findById(id)
    .then(task => {
        if (task) {
            res.status(200).json(task)
        } else {
            res.status(404).json({message: 'not a valid id'})
        }
    })
    .catch(() => {
        res.status(500).json({message: 'failed to get resource with that id'})
    });
});

router.post('/', Middleware.IntToBoolean(Tasks, "task_completed", "post"), (req, res) => {
    const { newObject } = req;
    res.status(200).json(newObject[0])
});

module.exports = router;
