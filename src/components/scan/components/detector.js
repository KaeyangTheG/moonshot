import React from 'react'
import sharedDetectionContainer from '../../../context/detection-container'
import Banana from '../../common/banana'
import Can from '../../common/can'

const COUNTER_INTERVAL = 1000

class Detector extends React.Component {
  state = {counter: 1}
  componentDidMount () {
    this.interval = setInterval(this.updateCounter, COUNTER_INTERVAL)
  }
  componentWillUnmount () {
    window.clearInterval(this.interval)
  }
  updateCounter = () => {
    this.setState(
      ({counter}) => ({counter: counter - 1}),
      () => {
        if (this.state.counter < 1) {
          sharedDetectionContainer.setDetected(this.props.label)
            .then(this.props.onCountDownEnd)
        }
      }
    )
  }
  getCounter = () => {
    const {counter} = this.state
    if (!this.props.label) {
      return ''
    }
    return counter
  }
  render () {
    const {label} = this.props
    const isBanana = label === 'banana'
    const Silhouette = isBanana ? Banana : Can

    return (
      <div style={{
        position: 'absolute',
        width: '100vw',
        textAlign: 'center',
        zIndex: 1,
        bottom: 0
      }}>
        {
          <Silhouette stroke="#fff" size={150}/>
        }
      </div>
    )
  }
}

export default Detector
