import React from 'react'
import posed from 'react-pose'
import {Link} from 'react-router-dom'
import './scan.css'
import {Viewfinder} from '../common/viewfinder'

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
  <div className="scan__camera"></div>
)

class Scan extends React.Component {
  state = {showCamera: false}
  componentDidMount = () => {
    setTimeout(() => {
      this.props.history.push('/educate')
    }, 5000 + Math.random() * 5000)
    setTimeout(() => {
      this.setState({showCamera: true})
    }, 500)
  }
  render () {
    const { showCamera } = this.state
    return (
      <div className="scan">
        <Fadeout style={{transform: 'translateY(-5vh)'}} pose={
          showCamera ? 'hidden' : 'visible'
        }>
          <p>Place your coke product within the viewfinder</p>
        </Fadeout>
        <Viewfinder />
        <TranslateIn style={{position: 'absolute', top: 0, left: 0, zIndex: -1}}
          pose={showCamera ? 'visible' : 'hidden'}>
          <Camera />
        </TranslateIn>
      </div>
    )
  }
}

export default Scan
