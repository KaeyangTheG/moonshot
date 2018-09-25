import React from 'react'
import {didYouKnowData} from '../constants'
import {DidYouKnowItem, DidYouKnowText} from './did-you-know'
import Banana from '../../common/can'

const canDidYouKnowData = didYouKnowData['banana']

export default () => (
  <div>
    <div>
      <h3>Be a compostable CHAMP!</h3>
      <Banana />
    </div>
    <h3>Did you know?</h3>
    <p>
      {
        `In addition to banana's being compostable, there are a ton
        of awesome fun facts about them, here's a few:`
      }
    </p>
    <div>
      <ul style={{padding: 0}}>
        {
          canDidYouKnowData.map(({regular, bolded, src}) => (
            <DidYouKnowItem src={src} key={src}>
              <DidYouKnowText regular={regular} bolded={bolded} />
            </DidYouKnowItem>
          ))
        }
      </ul>
    </div>
  </div>
)
