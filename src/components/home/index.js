import React from 'react'
import {Link} from 'react-router-dom'
import {FadeContainer} from '../poses/fade'
import {RotateContainer} from '../poses/rotate'
import {Logo} from '../logo'
import earth from '../../earth.svg';
import '../common/common.css'
import './home.css'

const earthStyle = {
  position: 'absolute',
  left: '-10vw',
  bottom: '-80vw'
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
      <div className="page--full-screen home">
        {
          this.props.children
        }
        <RotateContainer style={earthStyle} pose={animate ? 'start' : 'end'}>
          <img src={earth} alt="earth" style={{width: '120vw'}} />
        </RotateContainer>
      </div>
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
    <FadeContainer style={{width: '50vw', margin: 'auto'}}>
      <Logo handleOnClick={() => history.push('/mission')}/>
    </FadeContainer>
  </Home>
)

export const HomeContext = () => (
  <Home animate={true}>
    <Sky />
    <FadeContainer style={{width: '50vw', margin: 'auto'}}>
      <p>Help us recycle a can and bottle for every one we sell.</p>
      <p><Link to="/instructions">Continue</Link></p>
    </FadeContainer>
  </Home>
)
