/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, { Component } from 'react';
import { AppRegistry, StyleSheet, Text, View, Image, Navigator, Alert } from 'react-native';
import Onboarding from 'react-native-simple-onboarding';
import OnBoard from './Components/Common/onboard';
import TabView from './Components/Common/TabView';
import MyScene from './Components/Common/MyScene';
import Login from './Components/Common/Login';
import UserList from './Components/Common/UserList';
import Locate from './Components/Common/Locate';
export default class pickerApp extends Component {
  
  constructor(props){
    super(props);
    this.renderScene = this.renderScene.bind(this);
  }

  renderScene(route, Navigator) {
    switch(route.id) {
      case 'main' :
        return (<TabView navigator={Navigator} title="Tab View Page" />)
      case 'MyScene' : 
        return (<MyScene navigator={Navigator} title="My Scene Page" />)
      case 'OnBoard' : 
        return (<OnBoard navigator={Navigator} title="OnBoard" />)
      case 'login' :
        return (<Login navigator={Navigator} title="login Page" />)
      case 'UserList' :
        return (<UserList navigator={Navigator} title="user list" />)
      case 'Locate' : 
        return (<Locate navigator={Navigator} title="Locate list" />)
    }
  }

  render() {
    return(
        <Navigator 
          initialRoute={{id: 'Locate'}} 
          renderScene={this.renderScene} 
          configureScreen={(route, routeStack) => Navigator.SceneConfigs.FloatFromBottom} 
        />
    )
  }
};

AppRegistry.registerComponent('pickerApp', () => pickerApp);
