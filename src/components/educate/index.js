import React from 'react'
import webcam from '../../utils/webcam'
import {capitalizePhrase} from '../../utils/formatting'
import Recycle from './components/recycle'
import {educateData, didYouKnowData} from './constants'
import './educate.css'

const canDidYouKnowData = didYouKnowData['can']

const DidYouKnowItem = ({src, alt='dyk', children}) => (
  <li style={{display: 'flex', marginBottom: '20px', justifyContent: 'space-between', alignItems: 'center'}}>
    <div style={{width: '40%'}}>
      <img src={src} alt={alt} style={{width: '80%'}} />
    </div>
    <div style={{width: '50%', textAlign: 'left'}}>
      {children}
    </div>
  </li>
)

const DidYouKnowText = ({regular, bolded}) => (
  <p>{regular}<br /><strong>{bolded}</strong></p>
)

const CanBody = () => (
  <div>
    <div>
      <h3>Coca-cola cans are made of...</h3>
      <Recycle pct={49}/>
    </div>
    <div>
      <h3>Did you know?</h3>
      <p>
        {
          `Recycled cans aren't just made into new cans?
          By recycling just one can, you can help save enough
          energy to power:`
        }
      </p>
      <div>
        <ul style={{padding: 0}}>
          {
            canDidYouKnowData.map(({regular, bolded, src}) => (
              <DidYouKnowItem src={src}>
                <DidYouKnowText regular={regular} bolded={bolded} />
              </DidYouKnowItem>
            ))
          }
        </ul>
      </div>
    </div>
  </div>
)

const EducateEpilogue = ({pledge}) => (
  <div className="educate__epilogue">
    <h2>{pledge}</h2>
  </div>
)

const EducateIntro = ({label, verdict, instructions, badge}) => {
  return (
    <div className="educate__intro">
      <div style={{width: '50vw', margin: 'auto'}}>
        <img src={badge} alt={`${label}-badge`} />
      </div>
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
