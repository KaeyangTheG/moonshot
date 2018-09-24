import React from 'react'
import webcam from '../../utils/webcam'
import {capitalizePhrase} from '../../utils/formatting'
import Recycle from './components/recycle'
import {educateData} from './constants'
import './educate.css'

const CanBody = () => (
  <div>
    <div>
      <h3>Coca-cola cans are made of...</h3>
      <Recycle pct={49}/>
    </div>
    <div>
      <h3>Did you know?</h3>
    </div>
  </div>
)

const EducateEpilogue = ({pledge}) => (
  <div className="educate__epilogue">
    <h2>{pledge}</h2>
  </div>
)

const EducateIntro = ({label, verdict, instructions}) => {
  return (
    <div className="educate__intro">
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
            <CanBody />
          }
          <EducateEpilogue pledge={data['pledge']}/>
        </div>
      </div>
    )
  }
}

export default Educate
