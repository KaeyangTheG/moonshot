import React from 'react'
import {Subscribe} from 'unstated'
import DetectionContainer from '../../context/detection-container'
import webcam from '../../utils/webcam'
import {capitalizePhrase} from '../../utils/formatting'
import BloomContainer from '../poses/bloom'
import earth from '../../earth.svg'
import CanBody from './components/can'
import BananaBody from './components/banana'
import {educateData} from './constants'
import './educate.css'

const EducateEpilogue = ({pledge}) => (
  <div className="educate__epilogue">
    <h2>{pledge}</h2>
    <img src={earth} alt="logo" style={{width: '60%'}} />
  </div>
)

const EducateIntro = ({label, verdict, instructions, badge}) => {
  return (
    <div className="educate__intro">
      <BloomContainer initialPose="start" pose="end"
        style={{width: '50vw', margin: 'auto'}}>
        <img src={badge} alt={`${label}-badge`} />
      </BloomContainer>
      <h2>{`${capitalizePhrase(label)} detected!`}</h2>
      <h3>
        {verdict}
      </h3>
      <p>
        {instructions}
      </p>
    </div>
  )
}

class Educate extends React.Component {
  render () {
    const data = educateData[this.props.label]
    return (
      <div className="educate">
        <div className="educate__container">
          <EducateIntro {...data} />
          {
            this.props.label === 'banana'
              ? <BananaBody /> : <CanBody />
          }
          <EducateEpilogue pledge={data['pledge']}/>
        </div>
      </div>
    )
  }
}

export default props => (
  <Subscribe to={[DetectionContainer]}>
    {({state}) => <Educate label={state.label || 'banana'} />}
  </Subscribe>
)
