import React from 'react'
import webcam from '../../utils/webcam'
import FullscreenPage from '../common/fullscreen'
import Recycle from './components/recycle'
import './educate.css'

class Educate extends React.Component {
  render () {
    return (
      <FullscreenPage className="educate">
        {
          // <p style={{margin: 'auto', padding: '20px'}}>
          //   {
          //     `Educate Content: Aluminum can be recycled using 5% of
          //     the energy used to make the original product.`
          //   }
          // </p>
        }
        <Recycle pct={49}/>
      </FullscreenPage>
    )
  }
}

export default Educate
