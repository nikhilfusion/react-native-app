/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, { Component } from 'react';
import { AppRegistry, StyleSheet, Text, View, Image } from 'react-native';
import Onboarding from 'react-native-simple-onboarding';
export default class OnBorad extends Component {
  render() {
    let abs = true;
    return (
        <Onboarding showSkip={abs} showNext={abs}
        pages={[
          { backgroundColor: '#3498db', image: <Image source={require('../../images/pe.png')} style={{width: 50, height: 50}}/>, title: 'PharmEasy', subtitle: 'Make your life easier' },
          { backgroundColor: '#3498db', image: <Image source={require('../../images/pe.png')} style={{width: 50, height: 50}}/>, title: 'Page2', subtitle: 'Implemented in React Native' },
          { backgroundColor: '#3498db', image: <Image source={require('../../images/pe.png')} style={{width: 50, height: 50}}/>, title: 'Page3', subtitle: 'Implemented in React Native' },
          { backgroundColor: '#3498db', image: <Image source={require('../../images/pe.png')} style={{width: 50, height: 50}}/>, title: 'Page4', subtitle: 'Implemented in React Native' },
        ]}
        onEnd={() => {
          this.props.navigator.push({
            id : 'login'
          });
        }}
      />
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F5FCFF',
  },
  welcome: {
    fontSize: 20,
    textAlign: 'center',
    margin: 10,
  },
  instructions: {
    textAlign: 'center',
    color: '#333333',
    marginBottom: 5,
  },
});