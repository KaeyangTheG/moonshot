import React from 'react'
import {Link} from 'react-router-dom'
import '../common/common.css'
import './instructions.css'
import can from '../../assets/images/can.png'
import {Viewfinder} from '../common/viewfinder'
import Button from '../common/button'
import webcam from '../../utils/webcam.js'

const FloatingCan = () => (
  <div>
    <img src={can} alt="can" />
  </div>
)

class Instructions extends React.Component {
  startWebcam = () => {
    webcam.start()
      .then(() => {
        this.props.history.push('/scan')
      })
      .catch((e) => {
        console.log(e)
        this.props.history.push('/no-scan')
      })
  }
  render () {
    return (
      <div className="page--full-screen instructions">
        <p style={{transform: 'translateY(-5vh)'}}>
          Place your coke product (Coca-cola, Coke Zero, Diet Coke cans) within the viewfinder.
        </p>
        <Viewfinder>
          <FloatingCan />
        </Viewfinder>
        <p>After detecting the object you will learn the proper way to dispose of it</p>
        <Button style={{position: 'absolute', bottom: 0, width: '100%'}}
          handleOnClick={this.startWebcam} label="Got it" />
      </div>
    )
  }
}

export default Instructions
