import React from 'react'
import posed from 'react-pose'

const AnimatedGraph = posed.circle({
  empty: {
    strokeDasharray: '0,100',
  },
  fill: {
    strokeDasharray: ({pct}) => `${pct},100`,
    transition: {
      duration: 1000,
      delay: 1000,
      type: 'spring',
      stiffness: 100
    }
  }
})

const Graph =
  ({
    size='180',
    pct=50,
    stroke='#00acc1',
    background='#efefef',
    style={},
    children
  }) => (
  <svg style={style} className="circle-chart" viewBox="0 0 35.83098862 35.83098862"
    width={size} height={size} xmlns="http://www.w3.org/2000/svg">
    <circle className="circle-chart__background" stroke={background}
      strokeWidth="4" fill="none" cx="17.91549431" cy="17.91549431" r="15.91549431" />
    <AnimatedGraph className="circle-chart__circle" stroke={stroke}
      strokeWidth="2" initialPose="empty" pose="fill" pct={pct}
      strokeLinecap="round" fill="none"
      cx="17.91549431" cy="17.91549431" r="15.91549431" />
    {children}
  </svg>
)

export default Graph
