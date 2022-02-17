const express = require('express')
const morgan = require('morgan')
const cors = require('cors')

const routers = require('./routes')
const dbConnect = require('./config/dbConnect')

const app = express()

app.use(morgan('dev'))
app.use(cors())
app.use(express.json({ urlExtended: true }))

dbConnect()

const { swaggerJsdoc, swaggerUi } = require('./swagger')
const swaggerJson = require("./swagger.json");
app.use("/api/docs", swaggerUi.serve, swaggerUi.setup(swaggerJson, { explorer: true }))

app.use('', routers)


module.exports = app