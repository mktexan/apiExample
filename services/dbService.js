const fs = require('fs')
const path = require('path')

const populationData = require('../db/database.json')
const filePath = path.join(__dirname, '../db/database.json')

setInterval(() => {
    const updatedPopulationData = JSON.stringify(populationData, null, 2)

    !fs.existsSync(filePath) ? console.error('no file') : fs.writeFileSync(filePath, updatedPopulationData)
}, 5000)

module.exports = { populationData }