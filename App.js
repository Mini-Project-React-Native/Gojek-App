import React, { Component } from 'react';
import Routers from './src/config/Routers';
import { LoginPage } from './src/containers/pages';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      phoneNumber: null,
    };
  }

  loggedIn = phoneNumber => {
    this.setState({
      phoneNumber,
    });
  };

  render() {
    return (
      <>
        {this.state.phoneNumber !== null ? (
          <Routers />
        ) : (
          <LoginPage login={this.loggedIn} />
        )}
      </>
    );
  }
}

export default App;
