import React from 'react'
import Graph from '../../common/graph'
import Triangle from '../../common/triangle'

class Percentage extends React.Component {
  state = {animatedPct: 0}
  componentDidMount () {
    setTimeout(this.incrementPct, 1000)
  }
  incrementPct = () => {
    this.setState(({animatedPct}) => ({
      animatedPct: animatedPct + 4
    }), () => {
      if (this.state.animatedPct < this.props.pct) {
        setTimeout(this.incrementPct, 40)
      }
    })
  }
  render () {
    const {animatedPct} = this.state
    return (
      <h1><strong>{`${Math.min(animatedPct, this.props.pct)}%`}</strong></h1>
    )
  }
}

export default ({pct}) => {
  return (
    <div className="recycle" style={{margin: 'auto'}}>

      <Graph size={window.innerWidth * 0.4} stroke="#E41E2A"
        background="#E69494" pct={pct} />
      <div className="recycle__stats">
        <Triangle size={20} color="#D8D8D8" />
        <Percentage pct={pct} />
        <p>Recycled aluminum</p>
      </div>
    </div>
  )
}
