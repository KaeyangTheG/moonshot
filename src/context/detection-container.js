import {Container} from 'unstated'

class DetectionContainer extends Container {
  state = {
    label: '',
    detected: ''
  }
  setLabel = label => {
    if (label === 'nothing') {
      return this.setState({label: ''})
    }
    return this.setState({label});
  }
  setDetected = detected => this.setState({detected})
  reset = () => this.setState({detected: '', label: ''})
}

const sharedDetectionContainer = new DetectionContainer()

export default sharedDetectionContainer
