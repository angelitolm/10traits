/*
  This file is a part of RoomForRent
  Author: Angel Labrada Massó
  Date: 17/4/2019 10:20am
 */

// ===============================================================
// Import Modules
// ===============================================================
const mongoose = require('mongoose')
const { Schema } = mongoose

// ===============================================================
// Define UserSchema
// ===============================================================
const UserSchema = new Schema({
  name: { type: String, require: true },
  email: { type: String, lowercase: true, require: true },
  username: { type: String, lowercase: true, require: true },
  password: { type: String, require: true },
  enabled: { type: Boolean, default: true },
  signupDate: { type: Date, default: Date.now() },
  lastLogin: Date,
  locked: { type: Boolean, default: false },
  expired: Date,
  expiresAt: Date,
  roles: String,
  credentialsExpired: Date,
  credentialExpireAt: Date,
  phone: Number,
  address: String,
  locale: String,
  avatar: String
})

const User = mongoose.model('User', UserSchema)
module.exports = User
