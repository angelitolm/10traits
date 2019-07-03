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
// Import Modules
// ===============================================================
import { Container, Row, Col, Card, Pagination, ListGroup, Button } from 'react-bootstrap'
import Question from './Question'
import BRangeSlider from './RangeSlider'
// import { connect } from 'react-redux'
// import { activeLink, inactiveLink, snoozeLink } from '../store'

export default function Questionnaire ({ loading, questions, onActiveQuestion, onInactiveQuestion }) {
  const events = {
     onActiveQuestion,
     onInactiveQuestion
   }

   let items = [];
   for (let i = 1; i <= 10; i++) {
     for(let j = 1; j <= questions.length; j++){
       items.push(
         <Pagination.Item key={i} active={i === questions.number}>
           {i}
         </Pagination.Item>,
       )
     }
   }

  const LoadingRow = (

      <Container style={{ marginTop: "35px" }}>
      <div className="loading-item">
        <span className="glow-text">
        <Row>
          <Col md={1} />
          <Col md={10}>
            <Card style={{ width: '100%' }}>
              <Card.Body>
                <Card.Title><span>Loading</span> <span>cool</span> <span>state</span></Card.Title>
                 <Container>
                   <Row>
                     <Col md={1} />
                     <Col md={10} className="justify-content-center">
                       <Pagination style={{ marginTop: "5px", marginBottom: "20px" }} className="justify-content-center"><span>Loading</span> <span>cool</span> <span>state</span></Pagination>
                     </Col>
                     <Col md={1} />
                   </Row>
                 </Container>

               <Card.Subtitle className="mb-2 text-muted"><span>Loading</span> <span>cool</span> <span>state</span></Card.Subtitle>

                 <Row style={{ margin: "0px 2rem" }}>
                   <Col md={4}>
                     <div className="name1">
                        <span>Loading</span> <span>cool</span> <span>state</span>
                     </div>
                     <div className="ListGroupLeft">
                       <ListGroup>
                         <span>Loading</span> <span>cool</span> <span>state</span>
                         <span>Loading</span> <span>cool</span> <span>state</span>
                         <span>Loading</span> <span>cool</span> <span>state</span>
                         <span>Loading</span> <span>cool</span> <span>state</span>
                         <span>Loading</span> <span>cool</span> <span>state</span>
                         <span>Loading</span> <span>cool</span> <span>state</span>
                         <span>Loading</span> <span>cool</span> <span>state</span>
                         <span>Loading</span> <span>cool</span> <span>state</span>
                       </ListGroup>
                       <BRangeSlider />
                    </div>
                   </Col>
                   <Col md={4}>
                       <Card.Subtitle className="mb-2 text-muted link_slogan"><span>Loading</span> <span>cool</span> <span>state</span></Card.Subtitle>
                   </Col>
                   <Col md={4}>
                   <div className="name1">
                       <span>Loading</span> <span>cool</span> <span>state</span>
                       </div>
                     <ListGroup>
                <span>Loading</span> <span>cool</span> <span>state</span>
                <span>Loading</span> <span>cool</span> <span>state</span>
                <span>Loading</span> <span>cool</span> <span>state</span>
                <span>Loading</span> <span>cool</span> <span>state</span>
                <span>Loading</span> <span>cool</span> <span>state</span>
                <span>Loading</span> <span>cool</span> <span>state</span>
                <span>Loading</span> <span>cool</span> <span>state</span>
                <span>Loading</span> <span>cool</span> <span>state</span>
              </ListGroup>
                   </Col>
                   </Row>
                   <Row style={{ margin: "0px 2rem" }}>
                     <Col md={4}>
                       <div className="boxbtn-left">
                           <span>Loading</span> <span>cool</span> <span>state</span>
                         </div>
                     </Col>
               <Col md={4}>
                 <Card.Subtitle className="mb-2 text-muted"><span>Loading</span> <span>cool</span> <span>state</span></Card.Subtitle>
               </Col>
               <Col md={4}>
                 <div className="boxbtn-right">
                   <span>Loading</span> <span>cool</span> <span>state</span>
                 </div>
               </Col>
                   </Row>
               </Card.Body>
              </Card>
          </Col>
          <Col md={1} />
        </Row>
        </span>
      </div>
      </Container>

  )

   if (loading) {
     return (
       <div className="list-items">
        {LoadingRow}
       </div>
     )
   }

   if (questions.length === 0) {
     return (
       <div className="list-items">
        <div className="wrapper-message">
          <span className="icon-check" />
          <div className="title-message">You have no questions</div>
          <div className="subtitle-message">Sit back and relax</div>
        </div>
      </div>
     )
   }

   const questionsInOrder = [
    ...questions.filter(t => t.state === 'INACTIVE_QUESTION'),
    ...questions.filter(t => t.state !== 'INACTIVE_QUESTION'),
  ]

  return (
    <div>
      { questionsInOrder.map(question  => <Question key={ question.id } question={ question } {...events} />) }
    </div>
  )
}

Questionnaire.propTypes = {
  loading: PropTypes.bool,
  questions: PropTypes.arrayOf(Question.propTypes.question).isRequired,
  onInactiveQuestion: PropTypes.func.isRequired,
  onActiveQuestion: PropTypes.func.isRequired,
}

Questionnaire.defaultProps = {
  loading: false,
}
