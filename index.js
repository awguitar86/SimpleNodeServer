const express = require('express')
const bodyParser = require('body-parser')
const path = require('path')
const rootDir = require('./utils/path')
const port = 5000

const app = express()

const welcomeRoutes = require('./routes/welcome')
const apiRoutes = require('./routes/api')

app.use(bodyParser.urlencoded({extended: false}))
app.use(express.static(path.join(rootDir, 'public')))

app.use(welcomeRoutes)
app.use(apiRoutes)

app.use((req, res, next) => {
  res.status(404).sendFile(path.join(rootDir, 'views', '404.html'))
})

app.listen(port, () => {
  console.log(`================================\nServer is listening on port ${port}\n================================`)
})