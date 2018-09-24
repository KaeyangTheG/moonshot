import React from 'react'
import posed from 'react-pose'
import {Link} from 'react-router-dom'
import webcam from '../../utils/webcam'
import FullscreenPage from '../common/fullscreen'
import {Viewfinder} from '../common/viewfinder'
import Button from '../common/button'
import can from '../../assets/images/can.png'
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

const FloatingCan = posed.div({
  visible: {
    opacity: 1,
    transition: {
      duration: 1000
    }
  },
  hidden: {
    opacity: 0
  }
})

const floatingCanStyle = {
  width: '100%',
  height: '100%',
  display: 'flex'
}

class Scan extends React.Component {
  state = {showCamera: false, gotIt: false}
  componentDidMount = () => {
    webcam.initialize(this.videoEl, this.canvasEl)
      .then(() => {
        this.setState({showCamera: true})
      })
      .catch(() => {
        this.props.history.push('/')
      })
  }
  setVideoRef = videoEl => this.videoEl = videoEl
  setCanvasRef = canvasEl => this.canvasEl = canvasEl
  componentWillUnmount = () => {
    webcam.stop()
  }
  navigateToEducate = () => this.props.history.push('/educate')
  render () {
    const { showCamera, gotIt } = this.state
    return (
      <FullscreenPage style={{background: "#545454"}}>
        <FullscreenPage className="scan"
          style={
            {
              position: 'absolute',
              zIndex: 2,
              background: `rgba(0, 0, 0, ${gotIt ? 0 : 0.6})`,
              top: 0,
              left: 0
            }}>
          <video ref={this.setVideoRef} style={{display: 'none'}}></video>
          <Viewfinder style={{zIndex: 3}}>
            <FloatingCan style={floatingCanStyle}
              pose={gotIt ? 'hidden' : 'visible'}>
              <img src={can} alt="can"
                style={{margin: 'auto', transform: 'rotateZ(-10deg)'}}/>
            </FloatingCan>
          </Viewfinder>
          <p style={{padding: '20px'}}>
            Place your Coca-cola product within the viewfinder
          </p>
          {
            !gotIt &&
              <Button label="Got it"
                style={
                  {
                    bottom: 0,
                    position: 'absolute',
                    zIndex: 1
                  }
                }
                handleOnClick={
                  () => this.setState({gotIt: true})
                } />
          }
        </FullscreenPage>
        <TranslateIn className="scan__camera"
          pose={showCamera ? 'visible' : 'hidden'}>
          <canvas width={window.innerWidth} height={window.innerHeight}
            ref={this.setCanvasRef}></canvas>
        </TranslateIn>
      </FullscreenPage>
    )
  }
}

export default Scan
