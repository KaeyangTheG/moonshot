import React from 'react'
import './common.css'

export const Viewfinder = ({style={}, children, active}) => {
  return (
    <div style={style}
      className={`${active ? 'viewfinder' : 'viewfinder__active'}`}>
      {children}
    </div>
  )
}
