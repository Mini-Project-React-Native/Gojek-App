import React, { Component } from 'react';
import { Image } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';

import { AccountPage, HelpPage, HomePage, InboxPage, OrdersPage } from '../../containers/pages';
import { Account, AccountActive, Help, HelpActive, Home, HomeActive, Inbox, InboxActive, Order, OrderActive } from '../../assets/icon';


const Tab = createBottomTabNavigator();

class Routers extends Component {
  constructor(props) {
    super(props);
    this.state = {
      isLoggedIn: false
    }
  }

  render() { 
    return (
        <NavigationContainer>
            <Tab.Navigator
                tabBarOptions={{
                    activeTintColor: '#43AB4A',
                    inactiveTintColor: '#545454',
                }}
            >
                <Tab.Screen name='Home' component={HomePage} options={{tabBarIcon: ({focused}) => (<Image source={focused ? HomeActive : Home} style={{width: 26, height: 26}} />)}} />
                <Tab.Screen name='Orders' component={OrdersPage} options={{tabBarIcon: ({focused}) => (<Image source={focused ? OrderActive : Order} style={{width: 26, height: 26}} />)}} />
                <Tab.Screen name='Help' component={HelpPage} options={{tabBarIcon: ({focused}) => (<Image source={focused ? HelpActive : Help} style={{width: 26, height: 26}} />)}} />
                <Tab.Screen name='Inbox' component={InboxPage} options={{tabBarIcon: ({focused}) => (<Image source={focused ? InboxActive : Inbox} style={{width: 26, height: 26}} />)}} />
                <Tab.Screen name='Account' component={AccountPage} options={{tabBarIcon: ({focused}) => (<Image source={focused ? AccountActive : Account} style={{width: 26, height: 26}} />)}} />
            </Tab.Navigator>
        </NavigationContainer>
    );
  }
}

export default Routers;