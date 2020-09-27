import React, { Component } from 'react';
import { Image, Text, View } from 'react-native';

import { ImgOrd, LogoOrd } from '../../../assets/icon';


class OrdersPage extends Component {
    constructor(props) {
        super(props);
        this.state = {  }
    }
    render() { 
        return (
            <View style={{backgroundColor: 'white', flex: 1}}>
                <View style={{position: 'relative'}}>
                    <View style={{borderBottomWidth: 1, borderBottomColor: '#f2f2f2', flexDirection: 'row', height: 65, alignItems: 'center'}}>
                        <Text style={{color: 'black', fontSize: 20, fontWeight: 'bold', flex: 1, textAlign: 'center'}}>Ongoing Orders</Text>
                    </View>
                    <View style={{position: 'absolute', right: 0, height: 65, width: 65, justifyContent: 'center', alignItems: 'center'}}>
                        <Image source={LogoOrd} style={{height: 32, width: 32}} />
                    </View>
                </View>
                <View style={{flex: 1}}>
                    <View style={{height: '30%', width: '100%', marginTop: 170}}>
                        <Image source={ImgOrd} style={{width: undefined, height: undefined, resizeMode: 'contain', flex: 1}} />
                    </View>
                    <View style={{marginTop: 40}}>
                        <Text style={{fontSize: 20, fontWeight: 'bold', textAlign: 'center'}}>Let's order Gojek!</Text>
                        <Text style={{fontSize: 15, textAlign: 'center', marginTop: 25}}>Our drivers will be happy to help you.</Text>
                        <Text style={{fontSize: 15, textAlign: 'center'}}>Let's make an order!</Text>
                    </View>
                </View>
            </View>
        );
    }
}
 
export default OrdersPage;