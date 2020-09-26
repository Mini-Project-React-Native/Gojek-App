import React from 'react';
import {
  Alert,
  Image,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from 'react-native';
import { SmartphoneWhite } from '../../../assets/icon';
import { LogoGojekPutih } from '../../../assets/logo';
import firestore from '@react-native-firebase/firestore';

const LoginPage = props => {
  const [phoneNumber, setPhoneNumber] = React.useState();

  const loggedIn = async () => {
    setPhoneNumber();
    await firestore()
      .collection('users')
      .where('phone_number', '==', phoneNumber)
      .get()
      .then(users => {
        if (!users.empty) {
          users.forEach(user => props.login(user.data().phoneNumber));
        } else {
          Alert.alert('Error', 'Number Not Registered');
        }
      });
  };

  return (
    <View style={{ backgroundColor: '#313131', flex: 1 }}>
      <Image
        source={LogoGojekPutih}
        style={{
          alignSelf: 'center',
          height: 68,
          width: 160,
          marginTop: 20,
          marginBottom: 100,
        }}
      />
      <View style={{ flex: 1, justifyContent: 'flex-start' }}>
        <Text
          style={{
            color: 'white',
            textAlign: 'center',
            fontSize: 20,
            marginBottom: 50,
          }}>
          Please input your phone number!
        </Text>
        <View
          style={{
            flexDirection: 'row',
            marginBottom: 50,
            alignItems: 'center',
            paddingHorizontal: '10%',
            justifyContent: 'space-between',
          }}>
          <Image source={SmartphoneWhite} style={{ height: 40, width: 40 }} />
          <TextInput
            style={{
              borderBottomWidth: 2,
              borderBottomColor: '#AFAFAF',
              width: '80%',
              fontSize: 20,
              textAlign: 'center',
              color: 'white',
            }}
            placeholder="08xxxxxxxxxx"
            placeholderTextColor="#AFAFAF"
            keyboardType="phone-pad"
            textContentType="telephoneNumber"
            maxLength={12}
            inlineImageLeft="hp"
            onChangeText={text => setPhoneNumber(text)}
          />
        </View>
        <TouchableOpacity
          style={{
            backgroundColor: phoneNumber ? '#63BC62' : '#BDBDBD',
            width: '80%',
            height: 50,
            borderRadius: 8,
            alignSelf: 'center',
            justifyContent: 'center',
          }}
          onPress={loggedIn}
          disabled={phoneNumber ? false : true}>
          <Text
            style={{
              textAlign: 'center',
              fontSize: 20,
              fontWeight: 'bold',
              color: 'white',
            }}>
            LOGIN
          </Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default LoginPage;
