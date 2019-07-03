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
import { BRangeSlider } from '../components/RangeSlider'

// Add stories
storiesOf('Components|Range Slider', module)
  .add('vertical', () => (<div style={{ padding: '4rem' }}><BRangeSlider /></div>))
