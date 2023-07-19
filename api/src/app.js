const express = require('express')
const morgan = require('morgan')

// routes
const router = require('./routes')

// config
const app = express()

app.use(express.json())
app.use(morgan('dev'))

app.use('/api', router)

module.exports = app

