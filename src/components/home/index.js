import React from 'react'
import {Link} from 'react-router-dom'
import {FadeContainer} from '../poses/fade'
import {RotateContainer} from '../poses/rotate'
import {Logo} from '../logo'
import earth from '../../earth.png';
import Button from '../common/button'
import FullscreenPage from '../common/fullscreen'
import webcam from '../../utils/webcam'
import './home.css'

const earthStyle = {
  position: 'absolute',
  left: '-75vw',
  bottom: '-175vw',
  zIndex: -1,
  pointerEvents: 'none'
}

class Home extends React.Component {
  constructor (props) {
    super(props)
    this.state = {}
  }
  componentDidMount() {
    if (this.props.animate) {
      this.setState({
        animate: true
      })
    }
  }
  render () {
    const { animate } = this.state;
    return (
      <FullscreenPage className="home">
        {
          this.props.children
        }
        <RotateContainer style={earthStyle} pose={animate ? 'end' : 'start'}>
          <img src={earth} alt="earth" style={{width: '250vw', pointerEvents: 'none'}} />
        </RotateContainer>
      </FullscreenPage>
    )
  }
}

const Sky = () => (
  <div
    style={{
      zIndex: -1,
      position: 'absolute',
      top: 0,
      left: 0,
      width: '100%',
      height: '100%',
      background: '#70CDFB'
    }}>
    </div>
)

export const HomeLogo = ({history}) => (
  <Home>
    <Sky />
    <FadeContainer style={{width: '50vw', paddingTop: '100px'}}>
      <Logo handleOnClick={() => history.push('/mission')}/>
    </FadeContainer>
  </Home>
)

export const HomeContext = ({history}) => (
  <Home animate={true}>
    <Sky />
    <FadeContainer style={{width: '50vw', paddingTop: '100px'}}>
      <p>Help us recycle a can and bottle for every one we sell.</p>
      <Button label="Continue" handleOnClick={
        () =>
        webcam.start()
          .then(() => {
            history.push('/scan')
          })
          .catch((e) => {
            history.push('/scan')
          })
      } />
    </FadeContainer>
  </Home>
)
