// eslint-disable-next-line
/*eslint jsx-quotes: ["error", "prefer-double"]*/
/*
  This file is a part of 10Traits
  Author: Angel Labrada Massó
 */

// ===============================================================
// Import Modules
// ===============================================================
const service = require('../services/authorization')

// Authorization
function isAuth (req, res, next) {
  // It's empty
  if (!req.headers.authorization) {
    console.log(`User info =======: ${req.body.username}`)
    return res.status(403).send({ message: 'You don`t have authorization' })
  }

  // Auth Token
  const token = req.headers.authorization.split(' ')[1]

  // Get Deserialize User from passport
  service.decodeToken(token)
    // The token is correct
    .then(response => {
      req.user = response
      next()
    })
    // The token is incorrect
    .catch(response => {
      res.status(response.status)
    })
}

module.exports = isAuth
