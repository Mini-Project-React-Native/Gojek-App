import React from 'react';
import { Text, TouchableOpacity, View } from 'react-native';
import { connect } from 'react-redux';
import { setLogout } from '../../../config/Actions/authAction';

const AccountPage = props => {
  return (
    <View>
      <Text>AccountPage</Text>
      <TouchableOpacity onPress={() => props.setLogout()}>
        <Text>LOGOUT</Text>
      </TouchableOpacity>
    </View>
  );
};

const mapDispatchToProps = dispatch => ({
  setLogout: () => dispatch(setLogout()),
});

export default connect(null, mapDispatchToProps)(AccountPage);
