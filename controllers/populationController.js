const populationService = require('../services/populationService')

const getPopulationData = async (city, state) => {
    const populationData = await populationService.getPopulationData(city.toLowerCase(), state.toLowerCase())

    return populationData
}

const modifyPopulationData = async (city, state, population) => {
    const isNewData = await populationService.modifyPopulationData(city.toLowerCase(), state.toLowerCase(), population)

    return isNewData
}

module.exports = { getPopulationData, modifyPopulationData }