import React from 'react'
import posed from 'react-pose'

export const FadeContainer = posed.div({
  enter: { y: 0, opacity: 1, transition: {delay: 300, duration: 1000} },
  exit: { y: 50, opacity: 0 }
});
