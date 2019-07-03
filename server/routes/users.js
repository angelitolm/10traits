// eslint-disable-next-line
/*eslint jsx-quotes: ["error", "prefer-double"]*/
/*
  This file is a part of 10Traits
  Author: Angel Labrada Massó
 */

// ===============================================================
// Import Modules
// ===============================================================
const express = require("express")
const router = express.Router()
const { signUp, signIn } = require('../controllers/users')

// @route POST api/users/signup
// @desc Register user
// @access Public
router.post("/signup", signUp)

// @route POST api/users/signin
// @desc Login user and return JWT token
// @access Public
router.post("/signin", signIn)

module.exports = router
