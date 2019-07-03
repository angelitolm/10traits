// eslint-disable-next-line
/*eslint jsx-quotes: ["error", "prefer-double"]*/
/*
  This file is a part of 10Traits
  Author: Angel Labrada Massó
 */

// ===============================================================
// Import Modules
// ===============================================================
const express = require('express')
const bodyParser = require('body-parser')
const morgan = require('morgan')
require('../config/dbconnection')
const passport = require("passport")

// ===============================================================
// Route requires
// ===============================================================
const users = require('./routes/users')

// ===============================================================
// Initializing API with Express Framework
// ===============================================================
const api = express()

// ===============================================================
// Middleware
// ===============================================================
// Passport middleware
api.use(passport.initialize())
// Passport config
require("./middlewares/passport")(passport)

// Debug by console everything the requests to making on web server
api.use(morgan('dev'))

// API use format json for all requests
api.use(
  bodyParser.urlencoded({
    'extended': 'false'
  })
)
api.use(bodyParser.json())

// ===============================================================
// Global Variables
// ===============================================================

// ===============================================================
// Routes
// ===============================================================
api.get('/api', (req, res) => {
  res.status(200).send('<h1>The API Rest running here...')
})

api.use("/api/users", users) // User Route

// ===============================================================
// Static files
// ===============================================================
// api.use(express.static(path.join(__dirname, '/public')))

module.exports = api
