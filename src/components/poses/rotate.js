import React from 'react'
import posed from 'react-pose'

export const RotateContainer = posed.div({
  start: {
    rotate: '0deg',
    transition: {
      duration: 1000,
      delay: 400
    }
  },
  end: {
    rotate: '200deg',
    transition: {
      duration: 2000,
      delay: 400
    }
  }
})
