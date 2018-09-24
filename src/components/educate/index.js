import React from 'react'
import webcam from '../../utils/webcam'
import FullscreenPage from '../common/fullscreen'
import Recycle from './components/recycle'
import './educate.css'

class Educate extends React.Component {
  render () {
    return (
      <FullscreenPage className="educate">
        <Recycle pct={49} />
      </FullscreenPage>
    )
  }
}

export default Educate
