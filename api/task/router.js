// build your `/api/tasks` router here
const express = require('express');
const Resources = require('./model.js');
const router = express.Router();

router.get('/', (req, res) => {
    Resources.find()
    .then(tasks => {
        res.status(200).json(tasks)
    })
    .catch(() => {
        res.status(500).json({message: 'failed to get tasks'})
    });
});

router.get('/:id', (req, res) => {
    const { id } = req.params;
    Resources.findById(id)
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

router.post('/', (req, res) => {
    const taskData = req.body;

    Resources.addTask(taskData)
    .then(task => {
        res.status(200).json(task);
    })
    .catch(() => {
        res.status(500).json({message: 'failed to add resource to database'})
    });
});

module.exports = router;