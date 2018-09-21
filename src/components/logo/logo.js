import React from 'react';
import './logo.css';
import logo from '../../assets/images/recycle-with-coca-cola.png';

export const Logo = ({handleOnClick}) => {
  return (
    <div className="logo" onClick={handleOnClick}>
        {
          <img src={logo} alt="logo" style={{width: '80%'}} />
        }
        <p className="header">World without</p>
        <p className="header">Waste</p>
    </div>
  )
}
