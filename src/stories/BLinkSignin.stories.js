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
import { action } from '@storybook/addon-actions'

// ===============================================================
// Import Components
// ===============================================================
import BLinkSignin from '../components/BLinkSignin'


export function createLinkSignin(attrs) {
  return {
    id: Math.round(Math.random() * 1000000).toString(),
    title: 'LINK',
    linkto: '/link',
    state: 'INACTIVE',
    updatedAt: Date.now(),
    ...attrs,
  }
}

export const actions = {
  onInactive: action('onInactive'),
  onActive: action('onActive'),
}

//Add stories
storiesOf('Components|Links Login', module)
  .add('inactive', () => <BLinkSignin blink={createLinkSignin({ state: 'INACTIVE' })} {...actions} />)
  .add('active', () => <BLinkSignin blink={createLinkSignin({ state: 'ACTIVE' })} {...actions} />)
