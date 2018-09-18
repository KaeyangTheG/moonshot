import React, { Component } from 'react';
import {HomeLogo, HomeContext} from './components/home'
import './App.css'
import posed, {PoseGroup} from 'react-pose';
import { Route, Switch } from 'react-router-dom';

const RoutesContainer = posed.div({
  enter: {
    opacity: 1,
    beforeChildren: true
  },
  exit: { opacity: 1 }
});

const rootRender = ({location}) => (
  <div className="App">
    <PoseGroup>
      <RoutesContainer key={location.key}>
        <Switch location={location}>
          <Route exact path="/" component={HomeLogo} key="home" />
          <Route exact path="/mission" component={HomeContext} key="mission" />
        </Switch>
      </RoutesContainer>
    </PoseGroup>
  </div>
)

class App extends Component {
  render() {
    return (
      <Route render={rootRender} />
    );
  }
}

export default App;
