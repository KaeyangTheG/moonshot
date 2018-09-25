import React from 'react'
import {Container} from 'unstated'

class DetectionContainer extends Container {
  state = {
    label: ''
  }
  setLabel = label => {
    if (label === 'nothing') {
      this.setState({label: ''})
      return
    }
    return this.setState({label})
  }
}

const sharedDetectionContainer = new DetectionContainer()

export default sharedDetectionContainer
