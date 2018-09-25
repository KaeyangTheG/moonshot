import React from 'react'
import {Container} from 'unstated'

class DetectionContainer extends Container {
  state = {
    label: '',
    detected: ''
  }
  setLabel = label => {
    if (label === 'nothing') {
      this.setState({label: ''})
      return
    }
    return this.setState({label});
  }
  setDetected = detected => this.setState({detected})
}

const sharedDetectionContainer = new DetectionContainer()

export default sharedDetectionContainer
