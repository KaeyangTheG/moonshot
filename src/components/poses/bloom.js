import React from 'react'
import posed from 'react-pose'

export default posed.div({
  start: {
    scale: 0,
    opacity: 0
  },
  end: {
    scale: 1,
    opacity: 1,
    transition: {
      delay: 400,
      type: 'spring',
      stiffness: 300
    }
  }
});
