import React from 'react'
import webcam from '../../utils/webcam'
import FullscreenPage from '../common/fullscreen'
import Graph from '../common/graph'
import './educate.css'

class Educate extends React.Component {
  render () {
    return (
      <FullscreenPage className="educate">
        <p style={{margin: 'auto', padding: '20px'}}>
          {
            `Educate Content: Aluminum can be recycled using 5% of
            the energy used to make the original product.`
          }
        </p>
        <Graph size={window.innerWidth * 2} stroke="#E41E2A" pct={49} />
      </FullscreenPage>
    )
  }
}

export default Educate
