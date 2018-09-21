import React from 'react'
import posed from 'react-pose'
import {Link} from 'react-router-dom'
import webcam from '../../utils/webcam'
import {Viewfinder} from '../common/viewfinder'
import '../common/common.css'
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

const floatingStyle = {
  position: 'absolute',
  zIndex: 1
}

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
      <div className="scan page--full-screen" onClick={this.navigateToEducate}>
        <video ref={this.setVideoRef} style={{display: 'none'}}></video>
        <Viewfinder style={{left: '10%', ...floatingStyle}}/>
        <p style={{bottom: '10%', padding: '20px', ...floatingStyle}}>
          Place your coke product within the viewfinder
        </p>
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
