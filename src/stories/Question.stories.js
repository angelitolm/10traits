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
// Import Modules
// ===============================================================
import Question from '../components/Question'

export function createQuestion(attrs) {
  return {
	min1: '0',
	max1: '100',
  valslide1: 0,
	min2: '0',
	max2: '100',
  valslide2: 0,
  id: Math.round(Math.random() * 1000000).toString(),
	title: '10TRAITS ASSESSMENT',
	number: '1',
	subtitle: 'Willignes to take risks',
	link_slogan: 'Risk Taker + Comparative',
	name1: 'Maurice',
	left1: 'Extreme',
	left2: 'Very Strong',
	left3: 'Strong',
	left4: 'Moderate',
	left5: 'Moderate',
	left6: 'Strong',
	left7: 'Very Strong',
	left8: 'Extreme',
	name2: 'Peter',
	right1: 'Extreme',
	right2: 'Very Strong',
	right3: 'Strong',
	right4: 'Moderate',
	right5: 'Moderate',
	right6: 'Strong',
	right7: 'Very Strong',
	right8: 'Extreme',
	link_details: 'Avoids Risk',
	previous: 'Previous',
	next: 'Next',
	state: 'INACTIVE_QUESTION',
	updatedAt: Date.now(),
	...attrs,
  }
}

export const actions = {
  onActiveQuestion: action('onActiveQuestion'),
  onInactiveQuestion: action('onInactiveQuestion'),
}

// stories.addDecorator(withKnobs)
// Add stories
storiesOf('Components|Question', module)
  // .addDecorator(withKnobs)
  .add('inactive', () => <Question question={createQuestion({ state: 'INACTIVE_QUESTION' }) } {...actions} />)
  .add('active', () => <Question question={createQuestion({ state: 'ACTIVE_QUESTION' }) } {...actions} />)
