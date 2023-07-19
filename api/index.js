const app = require('./src/app.js')

// config
const config = require('dotenv').config
config()

app.listen(4000, () => {
  console.log('Server running on port 4000')
})

