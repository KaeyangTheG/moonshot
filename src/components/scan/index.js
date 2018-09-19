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

const Fadeout = posed.div({
  visible: {
    opacity: 1
  },
  hidden: {
    opacity: 0
  }
})

const Camera = props => (
  <div></div>
)

class Scan extends React.Component {
  state = {showCamera: false}
  componentDidMount = () => {
    this.canvasEl.width = window.innerWidth
    this.canvasEl.height = window.innerHeight

    webcam.initialize(this.videoEl)
      .then(() => {
        this.setState({showCamera: true})
      })
      .catch(() => {
        this.props.history.push('/instructions')
      })
  }
  setVideoRef = videoEl => this.videoEl = videoEl
  setCanvasRef = canvasEl => {
    this.canvasEl = canvasEl
  }
  componentWillUnmount = () => {
    webcam.stop()
  }
  navigateToEducate = () => this.props.history.push('/educate')
  render () {
    const { showCamera } = this.state
    return (
      <div className="scan" onClick={this.navigateToEducate}>
        <video ref={this.setVideoRef} style={{display: 'none'}}></video>
        <Fadeout style={{transform: 'translateY(-5vh)'}} pose={
          showCamera ? 'hidden' : 'visible'
        }>
          <p>Place your coke product within the viewfinder</p>
        </Fadeout>
        <Viewfinder />
        <TranslateIn className="scan__camera"
          pose={showCamera ? 'visible' : 'hidden'}>
          <canvas ref={this.setCanvasRef}></canvas>
        </TranslateIn>
      </div>
    )
  }
}

export default Scan
