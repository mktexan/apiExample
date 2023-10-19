const express = require('express')
const app = express()

const populationController = require('../controllers/populationController')

app.get('/state/:state/city/:city', (req, res) => {
    const { state, city } = req.params

    populationController.getPopulationData(city, state)
        .then(populationData => res.json(populationData))
        .catch(_ => res.status(400).json({ error: 'State/city not found' }))
})

app.put('/state/:state/city/:city', (req, res) => {
    const { state, city } = req.params
    const population = req.body

    populationController.modifyPopulationData(city, state, population)
        .then(isNewData => isNewData ? res.status(201).send() : res.status(200).send())
        .catch(_ => res.status(400).json({ data: 'Error creating new state or city', error: _ }))
})

module.exports = app