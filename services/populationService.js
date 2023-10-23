const dbService = require('../services/dbService')

const getPopulationData = (city, state) => {
    return new Promise((resolve, reject) => {
        const stateAndCityExist = dbService.populationData[state]?.[city]

        if (!stateAndCityExist) return reject()

        const population = { population: Number(dbService.populationData[state][city]) }

        return resolve(population)
    })
}

const modifyPopulationData = (city, state, populationData) => {
    return new Promise((resolve, reject) => {
        const stateExists = dbService.populationData[state] !== undefined
        const cityExists = stateExists ? dbService.populationData[state][city] !== undefined : undefined
        const isNewData = !stateExists || !cityExists

        if (!stateExists) dbService.populationData[state] = {}

        dbService.populationData[state][city] = Number(populationData)

        return resolve(isNewData)
    })
}

module.exports = { getPopulationData, modifyPopulationData }