import React from 'react'
import {Link} from 'react-router-dom'
import './no-scan.css'
import '../common/common.css'

export default props => {
  return (
    <div className="page--full-screen no-scan">
      <p>Unfortunately we could not activate your webcam.
        Click the link below to read some fun facts about our planet
      </p>
      <Link to="/educate">Ok</Link>
    </div>
  )
}
