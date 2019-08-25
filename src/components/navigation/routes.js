import React from 'react';
import { createAppContainer, createStackNavigator } from 'react-navigation';
import {Image, View} from 'react-native'
import logo from './../../../assets/icons/logo.png'
import HomeScreen from './../screens/home-screen';
import DetailScreen from './../screens/detail-screen';

const AppNavigator = createStackNavigator(
  {
    HomeScreen ,
    DetailScreen 
  },
  {
    initialRouteName: 'HomeScreen',
    defaultNavigationOptions:{

      headerTitle:
      <View style={{flex:1, flexDirection:'row', justifyContent:'center'}}>
        <Image source={logo} style={{width:115, height:30}}/>
      </View>,

      headerStyle: {
      backgroundColor: '#000',
      }
    },
    
  }
  
)


export default createAppContainer(AppNavigator);


