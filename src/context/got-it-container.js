import {Container} from 'unstated'

class GotItContainer extends Container {
  state = {
    gotIt: false,
  }
  setGotIt = gotIt => this.setState({gotIt})
}

const sharedGotItContainer = new GotItContainer()

export default sharedGotItContainer
