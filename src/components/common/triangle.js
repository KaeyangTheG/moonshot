import React from 'react'
import './common.css'

export default ({size, color}) => {
  return (
    <div className="triangle" style={{
      borderLeft: `${size}px solid transparent`,
      borderRight: `${size}px solid transparent`,
      borderTop: `${size}px solid ${color}`
    }}></div>
  )
}
