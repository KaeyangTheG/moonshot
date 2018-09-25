import React from 'react'
import {didYouKnowData} from '../constants'
import {DidYouKnowItem, DidYouKnowText} from './did-you-know'
import Recycle from './recycle'

const canDidYouKnowData = didYouKnowData['can']

export default () => (
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
              <DidYouKnowItem src={src} key={src}>
                <DidYouKnowText regular={regular} bolded={bolded} />
              </DidYouKnowItem>
            ))
          }
        </ul>
      </div>
    </div>
  </div>
)
