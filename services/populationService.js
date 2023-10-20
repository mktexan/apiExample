const database = require('../db/population')

const getPopulationData = (city, state) => {
    return new Promise((resolve, reject) => {
        const stateAndCityExist = database[state]?.[city]

        if (!stateAndCityExist) return reject()

        const population = { population: Number(database[state][city]) }

        return resolve(population)
    })
}

const modifyPopulationData = (city, state, populationData) => {
    return new Promise((resolve, reject) => {
        const stateExists = database[state] !== undefined
        const cityExists = stateExists ? database[state][city] !== undefined : undefined
        const isNewData = !stateExists || !cityExists

        if (!stateExists) database[state] = {}

        database[state][city] = populationData

        return resolve(isNewData)
    })
}

module.exports = { getPopulationData, modifyPopulationData }