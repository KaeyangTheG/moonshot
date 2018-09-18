import React from 'react';
import './logo.css';
import logo from '../../logo.svg';

export const Logo = () => {
  return (
    <div className="logo">
        <p className="header">World without</p>
        <p className="header">Waste</p>
        <img src={logo} alt="logo" />
    </div>
  )
}
