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
            `Sponsor Content: Investing in our planet: We're working
          to bring people together to help us take back a
          bottle or can for every one we sell.`
          }
        </p>
      </div>
    )
  }
}

export default Educate
