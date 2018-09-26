import React from 'react'
import {Subscribe} from 'unstated'
import sharedDetectionContainer from '../../context/detection-container'
import sharedGotItContainer from '../../context/got-it-container'
import posed from 'react-pose'
import {Link} from 'react-router-dom'
import webcam from '../../utils/webcam'
import predict from '../../utils/predict'
import {safariCheck} from '../../utils/mobile'
import FullscreenPage from '../common/fullscreen'
import {Viewfinder} from '../common/viewfinder'
import Button from '../common/button'
import BackBtn from '../common/back'
import Detector from './components/detector'
import can from '../../assets/images/can.png'
import '../common/common.css'
import './scan.css'

const isSafari = safariCheck()

const TranslateIn = posed.div({
  visible: {
    translateY: '0vh'
  },
  hidden: {
    translateY: '100vh'
  }
})

const NoOp = posed.div({})

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
  constructor (props) {
    super(props)
    this.state = {
      showCamera: false,
      gotIt : props.gotIt
    }
  }
  componentDidMount = () => {
    sharedDetectionContainer.setLabel('')
      .then(() => {
        webcam.initialize(this.videoEl, this.canvasEl, this.predictionCanvasEl)
          .then(() => {
            this.setState({showCamera: true})
          })
          .catch(() => {
            this.props.history.push('/')
          })
      })
  }
  setVideoRef = videoEl => this.videoEl = videoEl
  setCanvasRef = canvasEl => this.canvasEl = canvasEl
  setPredictionCanvasRef = predictionCanvasEl =>
    this.predictionCanvasEl = predictionCanvasEl
  componentWillUnmount = () => {
    predict.stop()
    webcam.stop()
  }
  componentDidUpdate = (prevProps, prevState) => {
    const {showCamera, gotIt} = this.state
    if (showCamera && gotIt && !(prevState.showCamera && prevState.gotIt)) {
      predict.start(this.predictionCanvasEl)
    }
  }
  navigateToEducate = () => this.props.history.push('/educate')
  render () {
    const { showCamera, gotIt } = this.state
    const {label, history} = this.props
    const VideoCanvas = isSafari ? NoOp : TranslateIn
    return (
      <FullscreenPage style={{background: "#545454"}}>
        <BackBtn style={{position: 'absolute', top: '10px', left: '10px', zIndex: 3}}
          handleOnClick={() => this.props.history.replace('/')} />
        <FullscreenPage className="scan"
          style={
            {
              position: 'absolute',
              zIndex: 2,
              background: `rgba(0, 0, 0, ${gotIt ? 0 : 0.6})`,
              top: 0,
              left: 0
            }}>
          <video ref={this.setVideoRef}
            autoPlay={true}
            playsInline={true}
            muted={true}
            style={{ visibility: 'hidden', position: 'fixed' }} />
          <Viewfinder active={!!(label)} style={{zIndex: 3}}>
            <FloatingCan style={floatingCanStyle}
              pose={gotIt ? 'hidden' : 'visible'}>
              <img src={can} alt="can"
                style={{margin: 'auto', transform: 'rotateZ(-10deg)'}}/>
            </FloatingCan>
          </Viewfinder>
          <p style={{padding: '20px'}}>
            Place your Coca-cola product within the frame
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
                  () => {
                    if (isSafari) {
                      this.videoEl.play()
                    }
                    sharedGotItContainer.setGotIt(!isSafari)
                    this.setState({gotIt: true})
                  }
                } />
          }
        </FullscreenPage>
        <VideoCanvas className="scan__camera"
          pose={showCamera ? 'visible' : 'hidden'}>
          <canvas width={window.innerWidth} height={window.innerHeight}
            ref={this.setCanvasRef}></canvas>
        </VideoCanvas>
        <canvas style={{display: 'none'}}
          width="224" height="224"
          ref={this.setPredictionCanvasRef}></canvas>
        {
          gotIt && label &&
            <Detector key={label} label={label} onCountDownEnd={
              () => history.push('/educate')
            } />
        }
      </FullscreenPage>
    )
  }
}

export default props => (
  <Subscribe to={[sharedDetectionContainer]}>
    {
      ({state}) => <Scan label={state.label} {...props} />
    }
  </Subscribe>
)
