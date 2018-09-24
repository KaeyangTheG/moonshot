import React from 'react'
import {Container} from 'unstated'

class DetectionContainer extends Container {
  state = {
    label: 'banana'
  }
  setLabel = label => this.setState({label})
}

export default DetectionContainer
