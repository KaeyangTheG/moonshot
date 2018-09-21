import React, { Component } from 'react';
import {HomeLogo, HomeContext} from './components/home'
import Instructions from './components/instructions'
import Scan from './components/scan'
import NoScan from './components/no-scan'
import Educate from './components/educate'
import './App.css'
import posed, {PoseGroup} from 'react-pose';
import { Route, Switch } from 'react-router-dom';

const RoutesContainer = posed.div({
  enter: {
    opacity: 1,
    beforeChildren: true,
    delay: 300
  },
  exit: { opacity: ({opacityOnExit=0}) => opacityOnExit }
});

const getOpacityOnExit = path => (
  path === '/mission' ? 1 : 0
)

const rootRender = ({location}) => {
  return (
    <div className="App">
      <PoseGroup>
        <RoutesContainer opacityOnExit={getOpacityOnExit(location.pathname)}
          key={location.key}>
          <Switch location={location}>
            <Route exact path="/" component={HomeLogo} key="home" />
            <Route path="/mission" component={HomeContext} key="mission" />
            <Route path="/instructions" component={Instructions} key="instructions" />
            <Route path="/scan" component={Scan} key="scan" />
            <Route path="/no-scan" component={NoScan} key="no-scan" />
            <Route path="/educate" component={Educate} key="educate" />
          </Switch>
        </RoutesContainer>
      </PoseGroup>
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
