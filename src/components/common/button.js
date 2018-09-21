import React from 'react'

export default ({label, handleOnClick, style={}}) => {
  return (
    <div className="button" onClick={handleOnClick} style={style}>
      {label.split(' ').map(str => str[0].toUpperCase() + str.slice(1)).join(' ')}
    </div>
  )
}
