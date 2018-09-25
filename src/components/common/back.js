import React from 'react'
import back from '../../assets/back.svg'
import './common.css'

export default ({handleOnClick, style={}}) => (
  <div className="back-btn" style={style} onClick={handleOnClick}></div>
)
