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
import { Button } from 'react-bootstrap'
import { linkTo } from '@storybook/addon-links'
// import { action } from '@storybook/addon-actions'

// ===============================================================
// Import Modules
// ===============================================================
import Questionnaire from '../components/Questionnaire'
import { createQuestion, actions } from './Question.stories'


export const defaultQuestion = [
  createQuestion({ state: 'INACTIVE_QUESTION' }),
  createQuestion({ state: 'INACTIVE_QUESTION' }),
  createQuestion({ state: 'INACTIVE_QUESTION' }),
  createQuestion({ state: 'INACTIVE_QUESTION' }),
  createQuestion({ state: 'INACTIVE_QUESTION' }),
  createQuestion({ state: 'INACTIVE_QUESTION' }),
  createQuestion({ state: 'INACTIVE_QUESTION' }),
  createQuestion({ state: 'INACTIVE_QUESTION' }),
  createQuestion({ state: 'INACTIVE_QUESTION' }),
  createQuestion({ state: 'INACTIVE_QUESTION' }),
]

export const questionOne = [
  createQuestion({
    valslide1: '0',
    valslide2: '0',
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
  	previous: <Button className="mybtn" variant="primary" onClick={linkTo('Components|Questionnaire', 'Question 10')}>Previous</Button>,
  	next: <Button className="mybtn" variant="primary" onClick={linkTo('Components|Questionnaire', 'Question 2')}>Next</Button>,
    state: 'INACTIVE_QUESTION',
  })
]

export const questionTow = [
  createQuestion({
    valslide1: '0',
    valslide2: '0',
    title: '10TRAITS ASSESSMENT',
    number: '2',
    subtitle: 'Ability to feel empty',
    link_slogan: 'Less Empathetic',
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
    link_details: 'Highly Empathetic',
    previous: <Button className="mybtn" variant="primary" onClick={linkTo('Components|Questionnaire', 'Question 1')}>Previous</Button>,
    next: <Button className="mybtn" variant="primary" onClick={linkTo('Components|Questionnaire', 'Question 3')}>Next</Button>,
    state: 'INACTIVE_QUESTION',
  })
]

export const questionThree = [
  createQuestion({
    valslide1: '0',
    valslide2: '0',
    title: '10TRAITS ASSESSMENT',
    number: '3',
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
    previous: <Button className="mybtn" variant="primary" onClick={linkTo('Components|Questionnaire', 'Question 2')}>Previous</Button>,
    next: <Button className="mybtn" variant="primary" onClick={linkTo('Components|Questionnaire', 'Question 4')}>Next</Button>,
    state: 'INACTIVE_QUESTION',
  })
]

export const questionFour = [
  createQuestion({
    valslide1: '0',
    valslide2: '0',
    title: '10TRAITS ASSESSMENT',
    number: '4',
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
    previous: <Button className="mybtn" variant="primary" onClick={linkTo('Components|Questionnaire', 'Question 3')}>Previous</Button>,
    next: <Button className="mybtn" variant="primary" onClick={linkTo('Components|Questionnaire', 'Question 5')}>Next</Button>,
    state: 'INACTIVE_QUESTION',
  })
]

export const questionFive = [
  createQuestion({
    valslide1: '0',
    valslide2: '0',
    title: '10TRAITS ASSESSMENT',
    number: '5',
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
    previous: <Button className="mybtn" variant="primary" onClick={linkTo('Components|Questionnaire', 'Question 4')}>Previous</Button>,
    next: <Button className="mybtn" variant="primary" onClick={linkTo('Components|Questionnaire', 'Question 6')}>Next</Button>,
    state: 'INACTIVE_QUESTION',
  })
]

export const questionSix = [
  createQuestion({
    valslide1: '0',
    valslide2: '0',
    title: '10TRAITS ASSESSMENT',
    number: '6',
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
    previous: <Button className="mybtn" variant="primary" onClick={linkTo('Components|Questionnaire', 'Question 5')}>Previous</Button>,
    next: <Button className="mybtn" variant="primary" onClick={linkTo('Components|Questionnaire', 'Question 7')}>Next</Button>,
    state: 'INACTIVE_QUESTION',
  })
]

export const questionSevent = [
  createQuestion({
    valslide1: '0',
    valslide2: '0',
    title: '10TRAITS ASSESSMENT',
    number: '7',
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
    previous: <Button className="mybtn" variant="primary" onClick={linkTo('Components|Questionnaire', 'Question 6')}>Previous</Button>,
    next: <Button className="mybtn" variant="primary" onClick={linkTo('Components|Questionnaire', 'Question 8')}>Next</Button>,
    state: 'INACTIVE_QUESTION',
  })
]

export const questionEight = [
  createQuestion({
    valslide1: '0',
    valslide2: '0',
    title: '10TRAITS ASSESSMENT',
    number: '8',
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
    previous: <Button className="mybtn" variant="primary" onClick={linkTo('Components|Questionnaire', 'Question 7')}>Previous</Button>,
    next: <Button className="mybtn" variant="primary" onClick={linkTo('Components|Questionnaire', 'Question 9')}>Next</Button>,
    state: 'INACTIVE_QUESTION',
  })
]

export const questionNine = [
  createQuestion({
    valslide1: '0',
    valslide2: '0',
    title: '10TRAITS ASSESSMENT',
    number: '9',
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
    previous: <Button className="mybtn" variant="primary" onClick={linkTo('Components|Questionnaire', 'Question 8')}>Previous</Button>,
    next: <Button className="mybtn" variant="primary" onClick={linkTo('Components|Questionnaire', 'Question 10')}>Next</Button>,
    state: 'INACTIVE_QUESTION',
  })
]


export const questionTen = [
  createQuestion({
    valslide1: '0',
    valslide2: '0',
    title: '10TRAITS ASSESSMENT',
    number: '10',
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
    previous: <Button className="mybtn" variant="primary" onClick={linkTo('Components|Questionnaire', 'Question 9')}>Previous</Button>,
    next: <Button className="mybtn" variant="primary" onClick={linkTo('Components|Questionnaire', 'Question 1')}>Next</Button>,
    state: 'INACTIVE_QUESTION',
  })
]

// Add stories
storiesOf('Components|Questionnaire', module)
  .addDecorator(story => <div>{story()}</div>)
  .add('default', () => {
    const QuestioOne = <Questionnaire questions={defaultQuestion} {...actions} />
    return QuestioOne
  })
  .add('Question 1', () => <Questionnaire questions={questionOne} {...actions} />)
  .add('Question 2', () => <Questionnaire questions={questionTow} {...actions} />)
  .add('Question 3', () => <Questionnaire questions={questionThree} {...actions} />)
  .add('Question 4', () => <Questionnaire questions={questionFour} {...actions} />)
  .add('Question 5', () => <Questionnaire questions={questionFive} {...actions} />)
  .add('Question 6', () => <Questionnaire questions={questionSix} {...actions} />)
  .add('Question 7', () => <Questionnaire questions={questionSevent} {...actions} />)
  .add('Question 8', () => <Questionnaire questions={questionEight} {...actions} />)
  .add('Question 9', () => <Questionnaire questions={questionNine} {...actions} />)
  .add('Question 10', () => <Questionnaire questions={questionTen} {...actions} />)
  .add('End', () => <Questionnaire questions={questionOne} {...actions} />)
  .add('loading', () => <Questionnaire loading questions={[]} {...actions} />)
  .add('empty', () => <Questionnaire questions={[]} {...actions} />)
