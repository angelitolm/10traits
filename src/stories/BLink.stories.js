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
import BLink from '../components/BLink'

export function createLink(attrs) {
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


// Add stories
storiesOf('Components|Links', module)
  .add('inactive', () => <BLink blink={createLink({ state: 'INACTIVE' })} {...actions} />)
  .add('active', () => <BLink blink={createLink({ state: 'ACTIVE' })} {...actions} />)
