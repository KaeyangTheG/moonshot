import React from 'react'
import {Link} from 'react-router-dom'
import FullscreenPage from '../common/fullscreen'
import Button from '../common/button'
import './no-scan.css'
import '../common/common.css'

export default ({history}) => {
  return (
    <FullscreenPage className="no-scan">
      <p>Unfortunately we could not activate your webcam.
        Click the link below to read some fun facts about our planet
      </p>
      <Button style={{width: '50%'}}
        label="Continue" handleOnClick={
        () => history.push('/educate')
      } />
    </FullscreenPage>
  )
}
