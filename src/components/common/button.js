import React from 'react'
import {capitalizePhrase} from '../../utils/formatting'

export default ({label, handleOnClick, style={}}) => {
  return (
    <div className="button" onClick={handleOnClick} style={style}>
      {capitalizePhrase(label)}
    </div>
  )
}
