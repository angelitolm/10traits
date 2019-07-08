// eslint-disable-next-line
/*eslint jsx-quotes: ["error", "prefer-double"]*/
/*
  This file is a part of 10Traits
  Author: Angel Labrada Massó
 */

// ===============================================================
// Import Modules
// ===============================================================
import React, { useState, useRef, useEffect } from 'react'
import PropTypes from 'prop-types'
import { Row, Container, Col , Card, ListGroup, Button } from 'react-bootstrap'
import Pagination from 'react-bootstrap/Pagination'

// ===============================================================
// Import Components
// ===============================================================
import BRangeSlider from './RangeSlider'


function fnClickLeft (clicked) {
  // Slider
  let bobble = document.querySelector('.sliderleft>div>div>div>div>.rc-slider-handle')
  let track = document.querySelector('.sliderleft>div>div>div>div>.rc-slider-track')

  // All liItemsLeft
  let lfirst = document.querySelector('.lfirst')
  let lsecond = document.querySelector('.lsecond')
  let lthird = document.querySelector('.lthird')
  let lfourth = document.querySelector('.lfourth')
  let lfifth = document.querySelector('.lfifth')
  let lsixth = document.querySelector('.lsixth')
  let lseventh = document.querySelector('.lseventh')
  let leighth = document.querySelector('.leighth')


  // First list-group-item
  if (clicked === "first") {
    bobble.style.bottom = '100%'
    track.style.height = '100%'
    lfirst.classList.add('active')
  } else {
    lfirst.classList.remove('active')
  }

  // Second list-group-item
  if (clicked === 'second') {
    bobble.style.bottom = '85%'
    track.style.height = '85%'
    lsecond.classList.add('active')
  } else {
    lsecond.classList.remove('active')
  }

  // Third list-group-item
  if (clicked === 'third') {
    bobble.style.bottom = '74%'
    track.style.height = '74%'
    lthird.classList.add('active')
  } else {
    lthird.classList.remove('active')
  }

  // Fourth list-group-item
  if (clicked === 'fourth') {
    bobble.style.bottom = '63%'
    track.style.height = '63%'
    lfourth.classList.add('active')
  } else {
    lfourth.classList.remove('active')
  }

  // Fifth list-group-item
  if (clicked === 'fifth') {
    bobble.style.bottom = '40%'
    track.style.height = '40%'
    lfifth.classList.add('active')
  } else {
    lfifth.classList.remove('active')
  }

  // Sixth list-group-item
  if (clicked === 'sixth') {
    bobble.style.bottom = '29%'
    track.style.height = '29%'
    lsixth.classList.add('active')
  } else {
    lsixth.classList.remove('active')
  }

  // Seventh list-group-item
  if (clicked === 'seventh') {
    bobble.style.bottom = '19%'
    track.style.height = '19%'
    lseventh.classList.add('active')
  } else {
    lseventh.classList.remove('active')
  }

  // Eighth list-group-item
  if (clicked === 'eighth') {
    bobble.style.bottom = '8%'
    track.style.height = '8%'
    leighth.classList.add('active')
  } else {
    leighth.classList.remove('active')
  }
}

function fnClickRight (clicked) {
  // Slider
  let bobble = document.querySelector('.sliderright>div>div>div>div>.rc-slider-handle')
  let track = document.querySelector('.sliderright>div>div>div>div>.rc-slider-track')

  // All liItemsLeft
  let rfirst = document.querySelector('.rfirst')
  let rsecond = document.querySelector('.rsecond')
  let rthird = document.querySelector('.rthird')
  let rfourth = document.querySelector('.rfourth')
  let rfifth = document.querySelector('.rfifth')
  let rsixth = document.querySelector('.rsixth')
  let rseventh = document.querySelector('.rseventh')
  let reighth = document.querySelector('.reighth')


  // First list-group-item
  if (clicked === "first") {
    bobble.style.bottom = '100%'
    track.style.height = '100%'
    rfirst.classList.add('active')
  } else {
    rfirst.classList.remove('active')
  }

  // Second list-group-item
  if (clicked === 'second') {
    bobble.style.bottom = '85%'
    track.style.height = '85%'
    rsecond.classList.add('active')
  } else {
    rsecond.classList.remove('active')
  }

  // Third list-group-item
  if (clicked === 'third') {
    bobble.style.bottom = '74%'
    track.style.height = '74%'
    rthird.classList.add('active')
  } else {
    rthird.classList.remove('active')
  }

  // Fourth list-group-item
  if (clicked === 'fourth') {
    bobble.style.bottom = '63%'
    track.style.height = '63%'
    rfourth.classList.add('active')
  } else {
    rfourth.classList.remove('active')
  }

  // Fifth list-group-item
  if (clicked === 'fifth') {
    bobble.style.bottom = '40%'
    track.style.height = '40%'
    rfifth.classList.add('active')
  } else {
    rfifth.classList.remove('active')
  }

  // Sixth list-group-item
  if (clicked === 'sixth') {
    bobble.style.bottom = '29%'
    track.style.height = '29%'
    rsixth.classList.add('active')
  } else {
    rsixth.classList.remove('active')
  }

  // Seventh list-group-item
  if (clicked === 'seventh') {
    bobble.style.bottom = '19%'
    track.style.height = '19%'
    rseventh.classList.add('active')
  } else {
    rseventh.classList.remove('active')
  }

  // Eighth list-group-item
  if (clicked === 'eighth') {
    bobble.style.bottom = '8%'
    track.style.height = '8%'
    reighth.classList.add('active')
  } else {
    reighth.classList.remove('active')
  }
}


const Question = ({ question: { min1, max1, valslide1, min2, max2, valslide2, id, title, number, subtitle, link_slogan, name1, left1, left2, left3, left4, left5, left6, left7, left8,
    name2, right1, right2, right3, right4, right5, right6, right7, right8, link_details, previous, next, state, ...props }, onActiveQuestion, onInactiveQuestion }) => {

      let items = [];
      for (let i = 1; i <= 10; i++) {
        items.push(
          <Pagination.Item key={i} active={i === parseFloat(number)}>
            {i}
          </Pagination.Item>,
        )
      }


    const hListGroup = useRef(0)
    let currenthListGroup = hListGroup.current
    const [height,setHeight] = useState(0)

    let [val, setClickLeft1 ] = useState(0)

    useEffect(() => {
        let ListGroupLeft = document.querySelector('.ListGroupLeft')
        currenthListGroup = ListGroupLeft.clientHeight

        hListGroup.current = currenthListGroup
        setHeight(hListGroup.current)
    })

    currenthListGroup += 0

    if (valslide1 === undefined)
      valslide1 = 0

    if (valslide2 === undefined)
      valslide2 = 0


      return (
      	<Container style={{ marginTop: "105px" }}>
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
                    			 <ListGroup.Item className="green lfirst" onClick={ () => {fnClickLeft("first")} }>{left1}</ListGroup.Item>
                    			 <ListGroup.Item className="green lsecond" onClick={ () => {fnClickLeft("second")} }>{left2}</ListGroup.Item>
                    			 <ListGroup.Item className="green lthird" onClick={ () => {fnClickLeft("third")} }>{left3}</ListGroup.Item>
                    			 <ListGroup.Item className="green lfourth" onClick={ () => {fnClickLeft("fourth")} }>{left4}</ListGroup.Item>
                    			 <div className="blank"><ListGroup.Item ><div className="space_blank" /></ListGroup.Item></div>
                    			 <ListGroup.Item className="blue lfifth" onClick={ () => {fnClickLeft("fifth")} }>{left5}</ListGroup.Item>
                    			 <ListGroup.Item className="blue lsixth" onClick={ () => {fnClickLeft("sixth")} }>{left6}</ListGroup.Item>
                    			 <ListGroup.Item className="blue lseventh" onClick={ () => {fnClickLeft("seventh")} }>{left7}</ListGroup.Item>
                    			 <ListGroup.Item className="blue leighth" onClick={ () => {fnClickLeft("eighth")} }>{left8}</ListGroup.Item>
                  			 </ListGroup>
                  		</div>
                     </Col>
                     <Col md={4}>
                         <Card.Subtitle className="mb-2 text-muted link_slogan">{link_slogan}</Card.Subtitle>

                         <div className="sliderleft">
                           {/* Testing values */}
                           <BRangeSlider min={ min1 } max={ max1 } value={valslide1} height={currenthListGroup} />
                         </div>
                         <div className="sliderright">
                           {/* Testing values */}
                           <BRangeSlider min={ min2 } max={ max2 } value={valslide2} height={currenthListGroup} />
                         </div>
                     </Col>
                     <Col md={4}>
                       <div className="name1">
                         { name2 }
                       </div>
                       <ListGroup>
                			  <ListGroup.Item className="green rfirst" onClick={ () => {fnClickRight("first")} }>{right1}</ListGroup.Item>
                			  <ListGroup.Item className="green rsecond" onClick={ () => {fnClickRight("second")} }>{right2}</ListGroup.Item>
                			  <ListGroup.Item className="green rthird" onClick={ () => {fnClickRight("third")} }>{right3}</ListGroup.Item>
                			  <ListGroup.Item className="green rfourth" onClick={ () => {fnClickRight("fourth")} }>{right4}</ListGroup.Item>
                			  <div className="blank"><ListGroup.Item ><div className="space_blank" /></ListGroup.Item></div>
                			  <ListGroup.Item className="blue rfifth" onClick={ () => {fnClickRight("fifth")} }>{right5}</ListGroup.Item>
                			  <ListGroup.Item className="blue rsixth" onClick={ () => {fnClickRight("sixth")} }>{right6}</ListGroup.Item>
                			  <ListGroup.Item className="blue rseventh" onClick={ () => {fnClickRight("seventh")} }>{right7}</ListGroup.Item>
                			  <ListGroup.Item className="blue reighth" onClick={ () => {fnClickRight("eighth")} }>{right8}</ListGroup.Item>
                			</ListGroup>
                     </Col>
                    </Row>
                    <Row style={{ margin: "0px 2rem" }}>
                      <Col md={4}>
                        <div className="boxbtn-left">
                          {previous}
                        </div>
                      </Col>
              			  <Col md={4}>
              			    <Card.Subtitle className="mb-2 text-muted"><div className="link_details">{link_details}</div></Card.Subtitle>
              			  </Col>
              			  <Col md={4}>
              			    <div className="boxbtn-right">
              			      {next}
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
    min1: PropTypes.number.isRequired,
    max1: PropTypes.number.isRequired,
    valslide1: PropTypes.number.isRequired,
    min2: PropTypes.number.isRequired,
    max2: PropTypes.number.isRequired,
    valslide2: PropTypes.number.isRequired,
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
    previous: PropTypes.object.isRequired,
    next: PropTypes.string.isRequired,
    state: PropTypes.string.isRequired,

  }),
  onActiveQuestion: PropTypes.func,
  onInactiveQuestion: PropTypes.func,
}

export default Question
