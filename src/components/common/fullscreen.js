import React from 'react'
import './common.css'

export default ({className, children, style}) => (
  <div className={`page--full-screen ${className || ''}`}
    style={{...style, height: `${window.innerHeight}px`}}>
    {children}
  </div>
)
