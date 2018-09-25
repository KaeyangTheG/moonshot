import React from 'react'

const COUNTER_INTERVAL = 1000

class Detector extends React.Component {
  state = {counter: 3}
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
          this.props.onCountDownEnd()
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
    return (
      <div style={{
        position: 'absolute',
        width: '100vw',
        height: '5vh',
        background: 'white',
        textAlign: 'center',
        zIndex: 1,
        bottom: 0
      }}>
        {`${this.props.label} ${this.getCounter()}`}
      </div>
    )
  }
}

export default Detector
