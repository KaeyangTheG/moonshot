import React from 'react'
import { Logo } from '../logo'
import logo from '../../assets/images/coca-cola-logo2.png'
import './desktop.css'

export default props => {
  return (
    <div className="desktop">
      <img src={logo} alt='logo'/>
      <h3 style={{width: '45%', textAlign: 'center'}}>
        {
          `This app is intended for use on your mobile device.  Please visit
          this url on your phone to give it a try!`
        }
      </h3>
    </div>
  )
}
