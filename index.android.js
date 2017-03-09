/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, { Component } from 'react';
import { AppRegistry, StyleSheet, Text, View, Image, Navigator, Alert } from 'react-native';
import Onboarding from 'react-native-simple-onboarding';
import OnBoard from './Components/Common/onboard';
import MainPage from './Components/Common/MainPage';
import MyScene from './Components/Common/MyScene';
import Login from './Components/Common/Login';
export default class pickerApp extends Component {
  
  constructor(props){
    super(props);
    this.renderScene = this.renderScene.bind(this);
  }

  renderScene(route, Navigator) {
    switch(route.id) {
      case 'main' :
        return (<MainPage navigator={Navigator} title="main Page" />)
      case 'MyScene' : 
        return (<MyScene navigator={Navigator} title="My Scene Page" />)
      case 'OnBoard' : 
        return (<OnBoard navigator={Navigator} title="OnBoard" />)
      case 'login' :
        return (<Login navigator={Navigator} title="login Page" />)  
    }
  }

  render() {
    return(
        <Navigator 
          initialRoute={{id: 'login'}} 
          renderScene={this.renderScene} 
          configureScreen={(route, routeStack) => Navigator.SceneConfigs.FloatFromBottom} 
        />
    )
  }
};

AppRegistry.registerComponent('pickerApp', () => pickerApp);
