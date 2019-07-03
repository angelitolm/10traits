/*
  This file is a part of 10traits
  Author: Angel Labrada Massó
 */

// ===============================================================
// Import Modules
// ===============================================================
import { configure } from '@storybook/react'
import 'bootstrap/dist/css/bootstrap.min.css'
import '../src/assets/style.css'
import '../src/assets/index.css'

// In storyshots, the require happens here:
const req = require.context('../src', true, /\.stories.js$/)

// So if we add a decorator here, it won't apply to stories in storyshots
// addDecorator((story) => <div><h1>Wrapper</h1>h1>{story()}</div>)

function loadStories() {
  // in webpack the require happens here:
  req.keys().forEach(filename => req(filename))
  // require('../src/stories')

}

configure(loadStories, module)
