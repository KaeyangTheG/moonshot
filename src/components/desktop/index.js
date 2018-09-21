import React from 'react'
import { Logo } from '../logo'
import earth from '../../earth.svg'
import './desktop.css'

export default props => {
  return (
    <div className="desktop">
      <img src={earth} alt='earth'/>
      <h1>{`<Cool Logo here>`}</h1>
      <h3 style={{width: '45%', textAlign: 'center'}}>
        {
          `This app is intended for use on your mobile device.  Please visit
          this url on your phone to give it a go!`
        }
      </h3>
    </div>
  )
}
