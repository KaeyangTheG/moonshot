import React from 'react'
import posed from 'react-pose'

export const RotateContainer = posed.div({
  start: {
    rotate: '95deg',
  },
  end: {
    rotate: '-8deg',
    transition: {
      duration: 1200,
      delay: 400
    }
  },
})
