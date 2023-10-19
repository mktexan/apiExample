require('dotenv').config()

const port = 5555
const express = require('express')
const cors = require('cors')
const morgan = require('morgan')
const app = express()

app.use(express.text())
app.use(morgan('dev'))
app.use(cors())
app.use(express.json())

const populationApi = require('./routes/population')

app.use('/api/population', populationApi)

app.listen(port)

module.exports = app
