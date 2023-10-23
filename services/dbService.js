const fs = require('fs')
const path = require('path')

const populationData = require('../db/database.json')
const filePath = path.join(__dirname, '../db/database.json')

setInterval(() => {
    const updatedPopulationData = JSON.stringify(populationData, null, 2)

    if (!fs.existsSync(filePath)) return console.error('no file')

    fs.writeFile(filePath, updatedPopulationData, (err) => {
        if (err) console.error('Error writing to file:', err)
    })
}, 5000)

module.exports = { populationData }