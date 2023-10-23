const database = require('../services/dbService')

const getPopulationData = (city, state) => {
    return new Promise((resolve, reject) => {
        const stateAndCityExist = database.populationData[state]?.[city]

        if (!stateAndCityExist) return reject()

        const population = { population: Number(database.populationData[state][city]) }

        return resolve(population)
    })
}

const modifyPopulationData = (city, state, populationData) => {
    return new Promise((resolve, reject) => {
        const stateExists = database.populationData[state] !== undefined
        const cityExists = stateExists ? database.populationData[state][city] !== undefined : undefined
        const isNewData = !stateExists || !cityExists

        if (!stateExists) database.populationData[state] = {}

        database.populationData[state][city] = Number(populationData)

        return resolve(isNewData)
    })
}

module.exports = { getPopulationData, modifyPopulationData }