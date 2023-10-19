const database = require('../db/population')

const getPopulationData = async (city, state) => {
    return new Promise((resolve, reject) => {
        const population = { population: Number(database[state][city]) }

        if (database[state][city] == undefined) return reject()

        return resolve(population)
    })
}

const modifyPopulationData = async (city, state, populationData) => {
    return new Promise((resolve, reject) => {
        const stateExists = database[state] !== undefined
        const cityExists = database[state] !== undefined ? database[state][city] !== undefined : undefined
        const isNewData = !stateExists || !cityExists

        if(!stateExists) database[state] = {}

        database[state][city] = populationData

        return resolve(isNewData)
    })
}

module.exports = { getPopulationData, modifyPopulationData }