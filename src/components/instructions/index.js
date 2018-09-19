import React from 'react'
import {Link} from 'react-router-dom'
import './instructions.css'
import {Viewfinder} from '../common/viewfinder'

export default props => {
  return (
    <div className="instructions">
      <p style={{transform: 'translateY(-5vh)'}}>Place your coke product within the viewfinder</p>
      <Viewfinder />
      <div style={{position: 'absolute', bottom: 0}}><Link to="/scan">Got it</Link></div>
    </div>
  )
}
