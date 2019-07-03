// eslint-disable-next-line
/*eslint jsx-quotes: ["error", "prefer-double"]*/
/*
  This file is a part of 10Traits
  Author: Angel Labrada Massó
 */

// ===============================================================
// Import Modules
// ===============================================================
const jwt = require('jwt-simple')
const moment = require('moment')
const config = require('../../config/parameters')

// Create Token
function createToken (user) {
  const payload = {
    sub: user._id,
    iat: moment().unix(),
    exp: moment().add(14, 'days').unix()
  }

  return jwt.encode(payload, config.SECRET_TOKEN)
}

// Decoded Token
function decodeToken (token) {
  const decoded = new Promise((resolve, reject) => {
    try {
      const payload = jwt.decoded(token, config.SECRET_TOKEN)

      if (payload.exp <= moment().unix()) {
        reject({
          status: 401,
          message: 'The token has been expired'
        })
        resolve(payload.sub)
      }
    } catch (err) {
        reject({
          status: 500,
          message: 'Invalid Token'
        })
    }
  })

  return decoded
}

module.exports = {
  createToken,
  decodeToken
}
