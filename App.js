import React, { Component } from 'react';
import { Button, View } from 'react-native';

import Routers from './src/config/Routers';
import { LoginPage } from './src/containers/pages';


class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      isLoggedIn: false
    }
  }

  loggedIn = () => {
    this.setState({
      isLoggedIn: !this.state.isLoggedIn
    })
  }

  render() { 
    return (
      <>
        {this.state.isLoggedIn ?
          <Routers />
          :
          <LoginPage login={this.loggedIn} />
        }
      </>
    );
  }
}

export default App;