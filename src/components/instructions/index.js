import React from 'react'
import {Link} from 'react-router-dom'
import '../common/common.css'
import './instructions.css'
import {Viewfinder} from '../common/viewfinder'
import webcam from '../../utils/webcam.js'

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
        <Viewfinder />
        <p>After detecting the object you will learn the proper way to dispose of it</p>
        <div style={{position: 'absolute', bottom: 0}}>
          <button onClick={this.startWebcam}>Got it</button>
        </div>
      </div>
    )
  }
}

export default Instructions
