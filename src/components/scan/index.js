import React from 'react'
import posed from 'react-pose'
import {Link} from 'react-router-dom'
import webcam from '../../utils/webcam'
import {Viewfinder} from '../common/viewfinder'
import './scan.css'

const TranslateIn = posed.div({
  visible: {
    translateY: '0vh'
  },
  hidden: {
    translateY: '100vh'
  }
})

const Instructions = posed.p({
  white: {
    color: '#fff'
  },
  black: {
    color: '#000'
  }
})

class Scan extends React.Component {
  state = {showCamera: false}
  componentDidMount = () => {
    webcam.initialize(this.videoEl, this.canvasEl)
      .then(() => {
        this.setState({showCamera: true})
      })
      .catch(() => {
        this.props.history.push('/instructions')
      })
  }
  setVideoRef = videoEl => this.videoEl = videoEl
  setCanvasRef = canvasEl => this.canvasEl = canvasEl
  componentWillUnmount = () => {
    webcam.stop()
  }
  navigateToEducate = () => this.props.history.push('/educate')
  render () {
    const { showCamera } = this.state
    return (
      <div className="scan" onClick={this.navigateToEducate}>
        <video ref={this.setVideoRef} style={{display: 'none'}}></video>
        <Viewfinder />
        <Instructions style={{transform: 'translateY(5vh)'}} pose={
          showCamera ? 'white' : 'black'
        }>
          Place your coke product within the viewfinder
        </Instructions>
        <TranslateIn className="scan__camera"
          pose={showCamera ? 'visible' : 'hidden'}>
          <canvas width={window.innerWidth} height={window.innerHeight}
            ref={this.setCanvasRef}></canvas>
        </TranslateIn>
      </div>
    )
  }
}

export default Scan
