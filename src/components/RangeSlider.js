/* eslint-disable react/prop-types */
// eslint-disable-next-line
/*eslint jsx-quotes: ["error", "prefer-double"]*/
/*
  This file is a part of 10Traits
  Author: Angel Labrada Massó
 */

// ===============================================================
// Import Modules
// ===============================================================
import React from 'react';
import 'rc-slider/assets/index.css';
import 'rc-tooltip/assets/bootstrap.css';
import Slider from 'rc-slider';
// import PropTypes from 'prop-types'

// ===============================================================
// Import Component
// ===============================================================
// import { heightListGroup } from './Question'

// Something styles
const parentStyle = { overflow: 'hidden'};
const pageStyle = { padding: 0 }

function log(value) {
  console.log(value); //eslint-disable-line
}

// export class BRangeSlider extends React.Component {

// 	constructor(props) {
// 		super(props)
// 		this.state = {
// 			heightListGroup: 100
// 		}
// 	}

//     componentDidMount(){
// 		let heightListGroup = 100;

// 	    let foo = document.querySelectorAll('div')

// 	    for (let i = 0; i < foo.length; i++) {
// 	     if(foo[i].className === "ListGroupLeft") {
// 	       heightListGroup = foo[i].clientHeight
// 	     }
// 	    }

// 	    this.setState({heightListGroup: heightListGroup})

// 	    document.querySelector('.rc-slider').style.height = heightListGroup
//     }

// 	componentWillMount(){
// 	    // Question()
// 	}

//   render() {

//     return (
//       <div style={pageStyle}>
//         <div style={parentStyle}>
//           <div className="hrangeslider" >
//             <Slider style={{ float: 'left', width: 25, height: this.state.heightListGroup, marginLeft: '5px', marginBottom: 15, marginTop: 15 }} vertical min={0} max={100} onChange={log} defaultValue={0} value={0} />
//           </div>
//         </div>
//       </div>
//     )
//   }
// }


// let heightListGroup = 100;
// let foo = document.querySelectorAll('div')
//
// for (let i = 0; i < foo.length; i++) {
//   if(foo[i].className === "ListGroupLeft") {
// 	heightListGroup = foo[i].clientHeight
//   }
// }


export const BRangeSlider = ({ height, value, }, ...props) => {

  if (height === undefined)
    height = 300

  if (value === undefined)
    value = 50
  else
    parseFloat(value)

  return (
    <div style={pageStyle}>
      <div style={parentStyle}>
        <div className="hrangeslider" >
          <Slider style={{ float: 'left', width: 25, height: height, marginLeft: '5px', marginBottom: 15, marginTop: 15 }} height={height} vertical min={0} max={100} onChange={log} defaultValue={0} value={value}  />
        </div>
      </div>
    </div>
  )
}

export default BRangeSlider
