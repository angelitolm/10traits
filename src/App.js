// eslint-disable-next-line
/*eslint jsx-quotes: ["error", "prefer-double"]*/
/*
  This file is a part of 10Traits
  Author: Angel Labrada Massó
 */

// ===============================================================
// Import Modules
// ===============================================================
import React, { Component } from 'react'
import jwt_decode from "jwt-decode"
import setAuthToken from "./utils/setAuthToken"
import { Provider } from "react-redux"

// ===============================================================
// Import Components
// ===============================================================
// import Route from "./components/Routes"
import { setCurrentUser, logoutUser } from "./actions/authActions"
import store from "./store"

// Check for token to keep user logged in
if (localStorage.jwtToken) {
  // Set auth token header auth
  const token = localStorage.jwtToken
  setAuthToken(token);
  // Decode token and get user info and exp
  const decoded = jwt_decode(token)
  // Set user and isAuthenticated
  store.dispatch(setCurrentUser(decoded))
  // Check for expired token
  const currentTime = Date.now() / 1000 // to get in milliseconds
  if (decoded.exp < currentTime) {
    // Logout user
    store.dispatch(logoutUser())

    // Redirect to login
    window.location.href = "./signin"
  }
}

class App extends Component {
  render () {
  return (
    <div className="App">
      <header className="App-header">

      </header>
    </div>
  )
}
}

export default App
