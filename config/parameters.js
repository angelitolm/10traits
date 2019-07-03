// eslint-disable-next-line
/*eslint jsx-quotes: ["error", "prefer-double"]*/
/*
  This file is a part of 10Traits
  Author: Angel Labrada Massó
 */

// ===============================================================
// Import Modules
// ===============================================================
module.exports = {
  dbUri: process.env.MONGODB || 'mongodb://localhost:27017/traits', // 27017 is the default mongoDB port
  apiPort: process.env.PORT || 4000,
  secretOrKey: '10TraitsPass'
}
