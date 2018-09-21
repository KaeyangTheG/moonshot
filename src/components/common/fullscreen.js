import React from 'react'
import './common.css'

export default ({className, children}) => (
  <div className={`page--full-screen ${className || ''}`}
    style={{height: `${window.innerHeight}px`}}>
    {children}
  </div>
)
