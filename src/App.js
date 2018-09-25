import React, { Component } from 'react';
import DetectionContainer from './context/detection-container'
import posed, {PoseGroup} from 'react-pose';
import { Route, Switch } from 'react-router-dom';
import {HomeLogo, HomeContext} from './components/home'
import Scan from './components/scan'
import NoScan from './components/no-scan'
import Educate from './components/educate'
import Desktop from './components/desktop'
import mobileCheck from './utils/mobile'
import webcam from './utils/webcam'
import './App.css'

const RoutesContainer = posed.div({
  enter: {
    opacity: 1,
    beforeChildren: true,
    transition: {
      duration: 1000
    }
  },
  exit: {
    opacity: ({opacityOnExit}) => opacityOnExit,
  }
});

const getOpacityOnExit = path => (
  path === '/mission' ? 1 : 0
)

const isMobile = mobileCheck()

const rootRender = ({location}) => {
  return (
    <div className="App">
      {
        isMobile &&
        <PoseGroup>
          <RoutesContainer opacityOnExit={getOpacityOnExit(location.pathname)}
            key={location.pathname}>
            <Switch location={location}>
              <Route exact path="/" component={HomeLogo} key="home" />
              <Route path="/mission" component={HomeContext} key="mission" />
              <Route path="/scan" key="scan"
                render={
                  (props) =>
                    webcam.stream ? <Scan {...props} /> : <NoScan {...props} />
                }
              />
              <Route path="/educate" component={Educate} key="educate" />
            </Switch>
          </RoutesContainer>
        </PoseGroup>
      }
      {
        !isMobile &&
          <Desktop />
      }
    </div>
  )
}

class App extends Component {
  render() {
    return (
      <Route render={rootRender} />
    );
  }
}

export default App;
