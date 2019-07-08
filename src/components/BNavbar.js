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

// ===============================================================
// Import Components
// ===============================================================
import { Container, Navbar, Nav, Link } from 'react-bootstrap'
import BLink from './BLink'
import BLinkSignin from './BLinkSignin'
// import { connect } from 'react-redux'
// import { activeLink, inactiveLink, snoozeLink } from '../store'

export default function BNavbar ({ loading, links, linksSignin, onInactive, onActive }) {
  const events = {
     onInactive,
     onActive,
   }

   const LoadingRow = (
    <div className="loading-item">

      <Navbar fixed="top" bg="light" expand="lg" className="justify-content-end no-box-shadow">
        <Container>
          <Navbar.Brand href="#home" className="logo"><span className="logonum">10</span>TRAITS</Navbar.Brand>
          <Navbar.Toggle aria-controls="mr-auto basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="ml-auto">
              <span className="glow-text">
                <a className="lmenu"><span>Loading</span> <span>cool</span> <span>state</span></a>
                <a className="lmenu" ><span>Loading</span> <span>cool</span> <span>state</span></a>
                <a className="lmenu" ><span>Loading</span> <span>cool</span> <span>state</span></a>
                <a className="lmenu" ><span>Loading</span> <span>cool</span> <span>state</span></a>
                <a className="lmenu" ><span>Loading</span> <span>cool</span> <span>state</span></a>
              </span>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>

    </div>
  )

   if (loading) {
     return (
       <div className="list-items">
        {LoadingRow}{LoadingRow}{LoadingRow}{LoadingRow}{LoadingRow}{LoadingRow}
       </div>
     )
   }

   if (links.length === 0) {
     return (
       <div className="list-items">
        <div className="wrapper-message">
          <span className="icon-check" />
          <div className="title-message">You have no links</div>
          <div className="subtitle-message">Sit back and relax</div>
        </div>
      </div>
     )
   }

   const linksInOrder = [
    ...links.filter(t => t.state === 'INACTIVE'),
    ...links.filter(t => t.state !== 'INACTIVE'),
  ]

  return (
    <Navbar fixed="top" bg="light" expand="lg" className="justify-content-end">
      <Container>
        <Navbar.Brand href="#home" className="logo"><span className="logonum">10</span>TRAITS</Navbar.Brand>
        <Navbar.Toggle aria-controls="mr-auto basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="ml-auto">
            { linksInOrder.map(blink  => <BLink className={ blink.linkto } key={ blink.id } blink={ blink } {...events} />) }
          </Nav>
          <span className="signin_register justify-content-end">
            { linksSignin.map(blink  => <BLink style={{ padding: '0px !important', lineHeight: '14px !important' }} key={ blink.id } blink={ blink } {...events} />) }
          </span>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  )
}

BNavbar.propTypes = {
  loading: PropTypes.bool,
  links: PropTypes.arrayOf(BLink.propTypes.link).isRequired,
  linksSignin: PropTypes.arrayOf(BLinkSignin.propTypes.link).isRequired,
  onInactive: PropTypes.func.isRequired,
  onActive: PropTypes.func.isRequired,
}

BNavbar.defaultProps = {
  loading: false,
}
