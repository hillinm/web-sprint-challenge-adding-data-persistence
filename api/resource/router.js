const express = require('express');
const Resources = require('./model.js');
const router = express.Router();

router.get('/', (req, res) => {
    Resources.find()
    .then(resources => {
        res.status(200).json(resources)
    })
    .catch(() => {
        res.status(500).json({message: 'failed to get resources'})
    });
});

router.get('/:id', (req, res) => {
    const { id } = req.params;
    Resources.findById(id)
    .then(resource => {
        if (resource) {
            res.status(200).json(resource)
        } else {
            res.status(404).json({message: 'not a valid id'})
        }
    })
    .catch(() => {
        res.status(500).json({message: 'failed to get resource with that id'})
    });
});

router.post('/', (req, res) => {
    const resourceData = req.body;

    Resources.addResource(resourceData)
    .then(resource => {
        res.status(200).json(resource);
    })
    .catch(() => {
        res.status(500).json({message: 'failed to add resource to database'})
    });
});

module.exports = router;