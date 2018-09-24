import React from 'react'

export const DidYouKnowText = ({regular, bolded}) => (
  <p>{regular}<br /><strong>{bolded}</strong></p>
)

export const DidYouKnowItem = ({src, alt='dyk', children}) => (
  <li style={{display: 'flex', marginBottom: '20px', justifyContent: 'space-between', alignItems: 'center'}}>
    <div style={{width: '40%'}}>
      <img src={src} alt={alt} style={{width: '80%'}} />
    </div>
    <div style={{width: '50%', textAlign: 'left'}}>
      {children}
    </div>
  </li>
)
