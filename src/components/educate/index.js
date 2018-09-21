import React from 'react'
import webcam from '../../utils/webcam'
import '../common/common.css'
import './educate.css'

class Educate extends React.Component {
  render () {
    return (
      <div className="page--full-screen educate">
        <p style={{margin: 'auto', padding: '20px'}}>
          {
            `Educate Content: Aluminum can be recycled using 5% of
            the energy used to make the original product.`
          }
        </p>
      </div>
    )
  }
}

export default Educate
