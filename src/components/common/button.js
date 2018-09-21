import React from 'react'

export default ({label, onHandleClick}) => {
  return (
    <div className="button" onClick={onHandleClick}>
      {label}
    </div>
  )
}
