import React from 'react'
import './common.css'

const noOp = () => ({})

export default ({className, children, style, handleOnClick}) => (
  <div onClick={handleOnClick || noOp} className={`page--full-screen ${className || ''}`}
    style={{...style, height: `${window.innerHeight}px`}}>
    {children}
  </div>
)
