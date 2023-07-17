const express = require('express')
const config = require('dotenv').config
const morgan = require('morgan')

// config
const app = express()
config()

app.use(express.json())
app.use(morgan('dev'))

app.get('/ping', (_, res) => {
  return res.json('pong')
})

app.listen(4000, () => {
  console.log('Server running on port 4000')
})

