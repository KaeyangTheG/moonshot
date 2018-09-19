import React from 'react'
import posed from 'react-pose'
import {Link} from 'react-router-dom'
import {FadeContainer} from '../poses/fade'
import {RotateContainer} from '../poses/rotate'
import {Logo} from '../logo'
import earth from '../../earth.svg';

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
      <div
        onClick={() => console.log('hi')}
        style={{display: 'flex', width: '100vw', height: '100vh', position: 'relative'}}>
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

export const HomeLogo = ({pose}) => (
  <Home>
    <FadeContainer style={{width: '50vw', margin: 'auto'}} pose={pose}>
      <Link to="/mission"><Logo /></Link>
    </FadeContainer>
  </Home>
)

export const HomeContext = ({pose}) => (
  <Home animate={true}>
    <FadeContainer style={{width: '50vw', margin: 'auto'}}>
      <p>Help us recycle a can and bottle for every one we sell.</p>
      <p><Link to="/instructions">Continue</Link></p>
    </FadeContainer>
  </Home>
)
