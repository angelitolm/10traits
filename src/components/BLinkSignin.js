// eslint-disable-next-line
/*eslint jsx-quotes: ["error", "prefer-double"]*/
/*
  This file is a part of 10Traits
  Author: Angel Labrada Massó
 */

// ===============================================================
// Import Modules
// ===============================================================
import React from 'react'
import PropTypes from 'prop-types'
import { BrowserRouter as Router, Link } from 'react-router-dom'

const BLinkSignin = ({ blink: { id, title, linkto, state }, onInactive, onActive }) => {

  return (
    <Router>
      <span className="signin_register">
        <Link className="lmenu" to={linkto} variant="outline-primary" >{title}</Link> <span style={{ color: "#007bff" }}> | </span> <Link className="lmenu" to={linkto} variant="outline-primary" >{title}</Link>
      </span>
    </Router>
  )
}

BLinkSignin.propTypes = {
  blink: PropTypes.shape({
    id: PropTypes.string.isRequired,
    title: PropTypes.string.isRequired,
    linkto: PropTypes.string.isRequired,
    state: PropTypes.string.isRequired,
  }),
  onActive: PropTypes.func,
  onInactive: PropTypes.func,
}

export default BLinkSignin
