import React from 'react';
import {
  Image,
  Text,
  TouchableOpacity,
  View,
  StyleSheet,
  ToastAndroid,
} from 'react-native';
import { Gopay, More, Nearby, Pay, TopUp } from '../../../assets/icon';
import { GopayFeature } from '../../../components/molecules';
import { Input, Overlay } from 'react-native-elements';
import { RNCamera } from 'react-native-camera';
import firestore from '@react-native-firebase/firestore';
import { connect } from 'react-redux';

const HomeGopay = props => {
  const [cameraIsVisible, setCamera] = React.useState(false);
  const [topupIsVisible, setTopup] = React.useState(false);
  const [balanceId, setId] = React.useState(null);
  const [balance, setBalance] = React.useState(null);
  const [topUp, setTopUpValue] = React.useState(null);

  React.useEffect(() => {
    console.log('homegopay()', props);
    const unsubscribe = firestore()
      .collection('balance')
      .where('user_id', '==', props.auth.userId)
      .onSnapshot(querySnapshot => {
        let balances = [];
        querySnapshot.forEach(balance => {
          balances.push(balance.data());
          setId(balance.id);
        });
        setBalance(balances[0].balance);
      });
    return () => unsubscribe();
  }, []);

  const readBarcode = async data => {
    console.log(data);
  };

  const topUpBalance = () => {
    console.log(props.auth.userId);
    firestore()
      .collection('balance')
      .doc(balanceId)
      .update({ balance: firestore.FieldValue.increment(parseInt(topUp)) });
    setTopup(false);
  };

  return (
    <>
      <View style={{ marginHorizontal: 17, marginTop: 8 }}>
        <View
          style={{
            flexDirection: 'row',
            justifyContent: 'space-between',
            backgroundColor: '#2C5F88',
            borderTopLeftRadius: 4,
            borderTopRightRadius: 4,
            padding: 14,
          }}>
          <Image source={Gopay} />
          <Text style={{ fontSize: 17, fontWeight: 'bold', color: 'white' }}>
            Rp. {balance}
          </Text>
        </View>
        <View
          style={{
            flexDirection: 'row',
            paddingTop: 20,
            paddingBottom: 10,
            backgroundColor: '#2C6580',
            borderBottomLeftRadius: 4,
            borderBottomRightRadius: 4,
          }}>
          <TouchableOpacity onPress={() => setCamera(true)}>
            <GopayFeature title="Pay" img={Pay} />
          </TouchableOpacity>
          <GopayFeature title="Nearby" img={Nearby} />
          <TouchableOpacity onPress={() => setTopup(true)}>
            <GopayFeature title="Top Up" img={TopUp} />
          </TouchableOpacity>
          <GopayFeature title="More" img={More} />
        </View>
      </View>
      <Overlay
        isVisible={cameraIsVisible}
        onBackdropPress={() => setCamera(false)}
        fullScreen={true}>
        <>
          <RNCamera
            style={styles.preview}
            androidCameraPermissionOptions={{
              title: 'Permission to use camera',
              message: 'We need your permission to use your camera',
              buttonPositive: 'Ok',
              buttonNegative: 'Cancel',
            }}
            androidRecordAudioPermissionOptions={{
              title: 'Permission to use audio recording',
              message: 'We need your permission to use your audio',
              buttonPositive: 'Ok',
              buttonNegative: 'Cancel',
            }}
            onBarCodeRead={readBarcode}
          />
        </>
      </Overlay>
      <Overlay
        overlayStyle={styles.topUpOverlay}
        isVisible={topupIsVisible}
        onBackdropPress={() => setTopup(false)}>
        <View>
          <Input
            keyboardType="phone-pad"
            onChangeText={text => setTopUpValue(text)}
          />
          <TouchableOpacity
            style={styles.button}
            onPress={() => topUpBalance()}>
            <Text style={{ color: 'whitesmoke' }}>TopUp</Text>
          </TouchableOpacity>
        </View>
      </Overlay>
    </>
  );
};

const styles = StyleSheet.create({
  preview: {
    flex: 1,
    justifyContent: 'flex-end',
    alignItems: 'center',
  },
  topUpOverlay: {
    width: 300,
  },
  button: {
    backgroundColor: '#007bff',
    marginHorizontal: 90,
    paddingVertical: 12,
    paddingHorizontal: 28,
    width: 100,
    borderRadius: 10,
  },
});

const mapStateToProps = state => ({ auth: state.auth });

export default connect(mapStateToProps)(HomeGopay);
