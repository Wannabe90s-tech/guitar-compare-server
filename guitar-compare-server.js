const express = require('express')
var bodyParser = require('body-parser')
var cors = require('cors')
const routers = require('./routes')
const app = express()
const port = 5002
app.use(cors())
app.use('/assets/images', express.static('assets/images'))
app.use(express.json())
routers(app)
app.listen(port, () => {
  console.log(`Server is running on port ${port}`)
})