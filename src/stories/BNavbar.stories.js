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
import { storiesOf } from '@storybook/react'

// ===============================================================
// Import Components
// ===============================================================
import BNavbar from '../components/BNavbar'
import { createLink, actions } from './BLink.stories'
import { createLinkSignin } from './BLinkSignin.stories'

export const defaultLinks = [
  createLink({ state: 'INACTIVE' }),
  createLink({ state: 'INACTIVE' }),
  createLink({ state: 'INACTIVE' }),
  createLink({ state: 'INACTIVE' }),
]

export const withInactiveLinks = [
  createLink({ title: 'ABOUT US', linkto: 'about', state: 'INACTIVE' }),
  createLink({ title: 'OUR ADVISERS', linkto: 'how_works', state: 'INACTIVE' }),
  createLink({ title: 'HOW 10TRAITS WORKS', linkto: 'how_works', state: 'INACTIVE' }),
  createLink({ title: '303-443-3697', linkto: 'contact', state: 'INACTIVE' }),
]

export const defaultLinksSignin = [
  createLink({ state: 'INACTIVE' }),
  createLink({ state: 'INACTIVE' }),
]

export const withInactiveLinksSignin = [
  createLinkSignin({ title: 'Sign in', linkto: 'signin', state: 'INACTIVE' }),
  createLinkSignin({ title: '|', linkto: '', state: 'INACTIVE' }),
  createLinkSignin({ title: 'Register', linkto: 'register', state: 'ACTIVE' }),
]

// Add stories
storiesOf('Components|Navbar', module)
  .addDecorator(story => <div style={{ padding: '3rem' }}>{story()}</div>)
  .add('default', () => <BNavbar links={defaultLinks} linksSignin={defaultLinksSignin} {...actions} />)
  .add('loaded', () => <BNavbar links={withInactiveLinks} linksSignin={withInactiveLinksSignin} {...actions} />)
  .add('loading', () => <BNavbar loading links={[]} {...actions} />)
  .add('empty', () => <BNavbar links={[]} {...actions} />)
