import React from 'react';
import { Image, ScrollView, Text, TouchableOpacity, View } from 'react-native';
import { connect } from 'react-redux';
import { setLogout } from '../../../config/Actions/authAction';

import { ArrowRight, ChangeLanguage, EditProfile, EnterPromoCode, InviteAndEarn, MyOrders, MyVouchers, PrivacyPolicy, ProfileAccount, RateGojekApp, TermsOfService } from '../../../assets/icon';

const AccountPage = props => {
  return (
    <View style={{backgroundColor: 'white', flex: 1}}>
      <View style={{borderBottomWidth: 1, borderBottomColor: '#f2f2f2', height: 65, justifyContent: 'center'}}>
          <Text style={{color: 'black', fontSize: 20, fontWeight: 'bold', textAlign: 'center'}}>My Profile</Text>
      </View>
      <ScrollView style={{paddingHorizontal: 16}}>
          <View style={{height: 130, position: 'relative', justifyContent: 'center'}}>
          <Image source={ProfileAccount} style={{position: 'absolute', left: 0, height: 70, width: 70}} />
              <Text style={{paddingLeft: 90, fontSize: 25, fontWeight: 'bold'}}>Full Name</Text>
              <Text style={{paddingLeft: 90, fontSize: 18}}>08xxxxxxxxxx</Text>
              <Image source={EditProfile} style={{position: 'absolute', right: 0, height: 30, width: 30}} />
          </View>
          <View style={{marginTop: 30}}>
              <Text style={{fontSize: 17, fontWeight: 'bold', marginBottom: 10}}>Account</Text>
              <View>
                  <TouchableOpacity style={{borderBottomColor: 'grey', borderBottomWidth: 1, width: '100%', height: 70, alignSelf: 'center', justifyContent: 'center', position: 'relative'}}>
                      <Image source={MyOrders} style={{left: 0, position: 'absolute', height: 37, width: 37}} />
                      <Text style={{textAlign: 'left', fontSize: 18, fontWeight: 'bold', color: 'black', paddingLeft: 45, paddingLeft: 45}}>My Orders</Text>
                      <Image source={ArrowRight} style={{right: 0, position: 'absolute', height: 20, width: 20}} />
                  </TouchableOpacity>
                  <TouchableOpacity style={{borderBottomColor: 'grey', borderBottomWidth: 1, width: '100%', height: 70, alignSelf: 'center', justifyContent: 'center', position: 'relative'}}>
                      <Image source={EnterPromoCode} style={{left: 0, position: 'absolute', height: 37, width: 37}} />
                      <Text style={{textAlign: 'left', fontSize: 18, fontWeight: 'bold', color: 'black', paddingLeft: 45}}>Enter Promo Code</Text>
                      <Image source={ArrowRight} style={{right: 0, position: 'absolute', height: 20, width: 20}} />
                  </TouchableOpacity>
                  <TouchableOpacity style={{borderBottomColor: 'grey', borderBottomWidth: 1, width: '100%', height: 70, alignSelf: 'center', justifyContent: 'center', position: 'relative'}}>
                      <Image source={InviteAndEarn} style={{left: 0, position: 'absolute', height: 37, width: 37}} />
                      <Text style={{textAlign: 'left', fontSize: 18, fontWeight: 'bold', color: 'black', paddingLeft: 45}}>Invite and Earn</Text>
                      <Image source={ArrowRight} style={{right: 0, position: 'absolute', height: 20, width: 20}} />
                  </TouchableOpacity>
                  <TouchableOpacity style={{borderBottomColor: 'grey', borderBottomWidth: 1, width: '100%', height: 70, alignSelf: 'center', justifyContent: 'center', position: 'relative'}}>
                      <Image source={MyVouchers} style={{left: 0, position: 'absolute', height: 37, width: 37}} />
                      <Text style={{textAlign: 'left', fontSize: 18, fontWeight: 'bold', color: 'black', paddingLeft: 45}}>My Vouchers</Text>
                      <Image source={ArrowRight} style={{right: 0, position: 'absolute', height: 20, width: 20}} />
                  </TouchableOpacity>
                  <TouchableOpacity style={{borderBottomColor: 'grey', borderBottomWidth: 1, width: '100%', height: 70, alignSelf: 'center', justifyContent: 'center', position: 'relative'}}>
                      <Image source={ChangeLanguage} style={{left: 0, position: 'absolute', height: 37, width: 37}} />
                      <Text style={{textAlign: 'left', fontSize: 18, fontWeight: 'bold', color: 'black', paddingLeft: 45}}>Change Language</Text>
                      <Image source={ArrowRight} style={{right: 0, position: 'absolute', height: 20, width: 20}} />
                  </TouchableOpacity>
              </View>
          </View>
          <View style={{marginVertical: 30}}>
              <Text style={{fontSize: 17, fontWeight: 'bold', marginBottom: 10}}>General</Text>
              <View>
                  <TouchableOpacity style={{borderBottomColor: 'grey', borderBottomWidth: 1, width: '100%', height: 70, alignSelf: 'center', justifyContent: 'center', position: 'relative'}}>
                      <Image source={PrivacyPolicy} style={{left: 0, position: 'absolute', height: 37, width: 37}} />
                      <Text style={{textAlign: 'left', fontSize: 18, fontWeight: 'bold', color: 'black', paddingLeft: 45}}>Privacy Policy</Text>
                      <Image source={ArrowRight} style={{right: 0, position: 'absolute', height: 20, width: 20}} />
                  </TouchableOpacity>
                  <TouchableOpacity style={{borderBottomColor: 'grey', borderBottomWidth: 1, width: '100%', height: 70, alignSelf: 'center', justifyContent: 'center', position: 'relative'}}>
                      <Image source={TermsOfService} style={{left: 0, position: 'absolute', height: 37, width: 37}} />
                      <Text style={{textAlign: 'left', fontSize: 18, fontWeight: 'bold', color: 'black', paddingLeft: 45}}>Terms of Service</Text>
                      <Image source={ArrowRight} style={{right: 0, position: 'absolute', height: 20, width: 20}} />
                  </TouchableOpacity>
                  <TouchableOpacity style={{borderBottomColor: 'grey', borderBottomWidth: 1, width: '100%', height: 70, alignSelf: 'center', justifyContent: 'center', position: 'relative'}}>
                      <Image source={RateGojekApp} style={{left: 0, position: 'absolute', height: 37, width: 37}} />
                      <Text style={{textAlign: 'left', fontSize: 18, fontWeight: 'bold', color: 'black', paddingLeft: 45}}>Rate Gojek app</Text>
                      <Image source={ArrowRight} style={{right: 0, position: 'absolute', height: 20, width: 20}} />
                  </TouchableOpacity>
              </View>
          </View>
          <TouchableOpacity onPress={() => props.setLogout()} style={{borderColor: 'red', borderWidth: 1, borderRadius: 50, width: '100%', height: 50, alignSelf: 'center', justifyContent: 'center', marginBottom: 20}}>
              <Text style={{textAlign: 'center', fontSize: 18, fontWeight: 'bold', color: 'red'}}>Log out</Text>
          </TouchableOpacity>
      </ScrollView>
    </View>
  );
};

const mapDispatchToProps = dispatch => ({
  setLogout: () => dispatch(setLogout()),
});

export default connect(null, mapDispatchToProps)(AccountPage);
