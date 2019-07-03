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

const BLink = ({ blink: { id, title, linkto, state }, onInactive, onActive }) => {

  return (
    <Router>
        <Link className="lmenu" to={linkto} variant="primary" >{title}</Link>
    </Router>
  )
}

BLink.propTypes = {
  blink: PropTypes.shape({
    id: PropTypes.string.isRequired,
    title: PropTypes.string.isRequired,
    linkto: PropTypes.string.isRequired,
    state: PropTypes.string.isRequired,
  }),
  onActive: PropTypes.func,
  onInactive: PropTypes.func,
}

export default BLink
