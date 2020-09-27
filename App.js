import React from 'react';
import Routers from './src/config/Routers';
import { LoginPage } from './src/containers/pages';
import { connect } from 'react-redux';

const App = props => {
  return <>{props.auth.phoneNumber !== null ? <Routers /> : <LoginPage />}</>;
};

const mapStateToProps = state => ({ auth: state.auth });

export default connect(mapStateToProps)(App);
