import React from 'react';
import {
  Image,
  Text,
  TouchableOpacity,
  View,
  StyleSheet,
  Alert,
} from 'react-native';
import {Gopay, More, Nearby, Pay, TopUp} from '../../../assets/icon';
import {GopayFeature} from '../../../components/molecules';
import {Overlay} from 'react-native-elements';
import {RNCamera} from 'react-native-camera';

const HomeGopay = () => {
  const [isVisible, setVisible] = React.useState(false);
  let camera = React.useRef();

  const takePicture = async () => {
    if (camera) {
      const options = {quality: 0.5, base64: true};
      const data = await camera.takePictureAsync(options);
      console.log(data.uri);
    }
  };

  const readBarcode = (data) => {
    Alert.alert('QRCode', `Data: ${data.data}`);
    setVisible(false);
  };

  return (
    <>
      <View style={{marginHorizontal: 17, marginTop: 8}}>
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
          <Text style={{fontSize: 17, fontWeight: 'bold', color: 'white'}}>
            Rp50.375
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
          <TouchableOpacity onPress={() => setVisible(true)}>
            <GopayFeature title="Pay" img={Pay} />
          </TouchableOpacity>
          <GopayFeature title="Nearby" img={Nearby} />
          <GopayFeature title="Top Up" img={TopUp} />
          <GopayFeature title="More" img={More} />
        </View>
      </View>
      <Overlay
        isVisible={isVisible}
        onBackdropPress={() => setVisible(false)}
        fullScreen={true}>
        <>
          <RNCamera
            ref={(ref) => {
              camera = ref;
            }}
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
    </>
  );
};

const styles = StyleSheet.create({
  preview: {
    flex: 1,
    justifyContent: 'flex-end',
    alignItems: 'center',
  },
});

export default HomeGopay;
