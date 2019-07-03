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
import { Row, Container, Col , Card, ListGroup, Button } from 'react-bootstrap'
import Pagination from 'react-bootstrap/Pagination'

// ===============================================================
// Import Components
// ===============================================================
import BRangeSlider from './RangeSlider'

const Question = ({ question: { min1, max1, min2, max2, valslide1, valslide2, id, title, number, subtitle, link_slogan, name1, left1, left2, left3, left4, left5, left6, left7, left8,
    name2, right1, right2, right3, right4, right5, right6, right7, right8, link_details, previous, next, state }, onActiveQuestion, onInactiveQuestion }) => {

      let items = [];
      for (let i = 1; i <= 10; i++) {
        items.push(
          <Pagination.Item key={i} active={i === number}>
            {i}
          </Pagination.Item>,
        )
      }

    // parsing string
    parseFloat(min1)
    parseFloat(max1)
    parseFloat(min2)
    parseFloat(max2)

      return (
      	<Container style={{ marginTop: "35px" }}>
          <Row>
          	<Col md={1} />
          	<Col md={10}>
              <Card style={{ width: '100%' }}>
                <Card.Body>
                  <Card.Title>{title}</Card.Title>
                   <Container>
                     <Row>
                       <Col md={1} />
                       <Col md={10} className="justify-content-center">
                         <Pagination style={{ marginTop: "5px", marginBottom: "20px" }} className="justify-content-center">{items}</Pagination>
                       </Col>
                       <Col md={1} />
                     </Row>
                   </Container>

                 <Card.Subtitle className="mb-2 text-muted">{subtitle}</Card.Subtitle>

                   <Row style={{ margin: "0px 2rem" }}>
                     <Col md={4}>
                       <div className="name1">{ name1 }</div>
                       <div className="ListGroupLeft" id="ListGroupLeft">
              	         <ListGroup>
                    			 <ListGroup.Item className="green">{left1}</ListGroup.Item>
                    			 <ListGroup.Item className="green">{left2}</ListGroup.Item>
                    			 <ListGroup.Item className="green">{left3}</ListGroup.Item>
                    			 <ListGroup.Item className="green">{left4}</ListGroup.Item>
                    			 <div className="blank"><ListGroup.Item ><div className="space_blank" /></ListGroup.Item></div>
                    			 <ListGroup.Item className="blue">{left5}</ListGroup.Item>
                    			 <ListGroup.Item className="blue">{left6}</ListGroup.Item>
                    			 <ListGroup.Item className="blue">{left7}</ListGroup.Item>
                    			 <ListGroup.Item className="blue">{left8}</ListGroup.Item>
                  			 </ListGroup>
                  		</div>
                     </Col>
                     <Col md={4}>
                         <Card.Subtitle className="mb-2 text-muted link_slogan">{link_slogan}</Card.Subtitle>

                         <div className="sliderleft">
                           {/* Testing values */}
                           <BRangeSlider min={ min1 } max={ max1 } value={70} />
                         </div>
                         <div className="sliderright">
                           {/* Testing values */}
                           <BRangeSlider min={ min2 } max={ max2 } value={70} />
                         </div>
                     </Col>
                     <Col md={4}>
                       <div className="name1">
                         { name2 }
                       </div>
                       <ListGroup>
                			  <ListGroup.Item className="green">{right1}</ListGroup.Item>
                			  <ListGroup.Item className="green">{right2}</ListGroup.Item>
                			  <ListGroup.Item className="green">{right3}</ListGroup.Item>
                			  <ListGroup.Item className="green">{right4}</ListGroup.Item>
                			  <div className="blank"><ListGroup.Item ><div className="space_blank" /></ListGroup.Item></div>
                			  <ListGroup.Item className="blue">{right5}</ListGroup.Item>
                			  <ListGroup.Item className="blue">{right6}</ListGroup.Item>
                			  <ListGroup.Item className="blue">{right7}</ListGroup.Item>
                			  <ListGroup.Item className="blue">{right8}</ListGroup.Item>
                			</ListGroup>
                     </Col>
                    </Row>
                    <Row style={{ margin: "0px 2rem" }}>
                      <Col md={4}>
                        <div className="boxbtn-left">
                          <Button className="mybtn" variant="primary">{previous}</Button>
                        </div>
                      </Col>
              			  <Col md={4}>
              			    <Card.Subtitle className="mb-2 text-muted"><div className="link_details">{link_details}</div></Card.Subtitle>
              			  </Col>
              			  <Col md={4}>
              			    <div className="boxbtn-right">
              			      <Button className="mybtn" variant="primary">{next}</Button>
              			    </div>
              			  </Col>
                    </Row>
                  </Card.Body>
                </Card>
          	  </Col>
          	<Col md={1} />
          </Row>
        </Container>
      )
}

Question.propTypes = {
  question: PropTypes.shape({
    min1: PropTypes.string.isRequired,
    max1: PropTypes.string.isRequired,
    min2: PropTypes.string.isRequired,
    max2: PropTypes.string.isRequired,
    id: PropTypes.string.isRequired,
    number: PropTypes.string.isRequired,
    subtitle: PropTypes.string.isRequired,
    link_slogan: PropTypes.string.isRequired,
    name1: PropTypes.string.isRequired,
    left1: PropTypes.string.isRequired,
    left2: PropTypes.string.isRequired,
    left3: PropTypes.string.isRequired,
    left4: PropTypes.string.isRequired,
    left5: PropTypes.string.isRequired,
    left6: PropTypes.string.isRequired,
    left7: PropTypes.string.isRequired,
    left8: PropTypes.string.isRequired,
    name2: PropTypes.string.isRequired,
    right1: PropTypes.string.isRequired,
    right2: PropTypes.string.isRequired,
    right3: PropTypes.string.isRequired,
    right4: PropTypes.string.isRequired,
    right5: PropTypes.string.isRequired,
    right6: PropTypes.string.isRequired,
    right7: PropTypes.string.isRequired,
    right8: PropTypes.string.isRequired,
    link_details: PropTypes.string.isRequired,
    previous: PropTypes.string.isRequired,
    next: PropTypes.string.isRequired,
    state: PropTypes.string.isRequired,

  }),
  onActiveQuestion: PropTypes.func,
  onInactiveQuestion: PropTypes.func,
}

export default Question
