const express = require('express');
const Projects = require('./model.js');
const router = express.Router();

router.get('/', (req, res) => {
    Projects.find()
    .then(projects => {
        res.status(200).json(projects)
    })
    .catch(() => {
        res.status(500).json({message: 'failed to get project'})
    });
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

router.post('/', (req, res) => {
    const project = req.body;
    if (project.name && project.description) {
        Projects.insert(req.body)
        .then(project => {
            res.status(200).json(project)
        })
        .catch(() => {
            res.status(500).json({message: 'failed to add project'})
        })
    } else {
        res.status(404).json({message: 'a valid name and description is required'})
    }
})

module.exports = router;