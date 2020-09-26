import React, { Component } from 'react';
import { ScrollView, View } from 'react-native';

import { GoBanner, GoInfo, GoNews, SearchFeature } from '../../../components/molecules';
import { HomeGopay, HomeMainFeatures, ScrollableProducts } from '../../organisms';


class HomePage extends Component {
  constructor(props) {
    super(props);
    this.state = {  }
  }
  render() { 
    return (
        <View style={{flex: 1}}>
            <ScrollView style={{flex: 1, backgroundColor: 'white'}}>
                <SearchFeature />
                <HomeGopay />
                <HomeMainFeatures />
                <View style={{height: 17, backgroundColor: '#F2F2F4', marginTop: 20}}></View>
                <GoNews />
                <GoInfo />
                <GoBanner />
                <ScrollableProducts />
            </ScrollView>
        </View>
    );
  }
}

export default HomePage;