// eslint-disable-next-line
/*eslint jsx-quotes: ["error", "prefer-double"]*/
/*
  This file is a part of 10Traits
  Author: Angel Labrada Massó
 */

// ===============================================================
// Import Modules
// ===============================================================
const mongoose = require('mongoose')
mongoose.Promise = global.Promise
const api = require('./api')

// ===============================================================
// Settings
// ===============================================================
const config = require('../config/parameters')

// ===============================================================
// Starting Server
// ===============================================================
api.listen(config.apiPort, () => {
  console.log(`API Rest 10Traits running on http://localhost:${config.apiPort}`)
})

module.exports = mongoose
