/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, { Component } from 'react';
import { AppRegistry, StyleSheet, Text, View, Image, KeyboardAvoidingView, Navigator } from 'react-native';
import InputForm from './InputForm';

export default class Login extends Component {
  render() {
    return(
      <KeyboardAvoidingView style={styles.container} behavior="padding"> 
        <View style={styles.logoContainer}>
          <Text style={styles.heading}>PharmEasy</Text>
          <Image style={styles.logo} source={require('../../images/pe.png')} />
          <Text style={styles.logoText}>It makes your life easier</Text>
        </View>
        <View style={styles.formContainer}>
          <InputForm navigator={this.props.navigator}/>
        </View>
      </KeyboardAvoidingView>
    );
  }
}

const styles = StyleSheet.create({
  container : {
    flex:1,
    backgroundColor: '#3498db'
  },
  logo: {
    width:100,
    height:100
  },
  logoContainer: {
    alignItems : 'center',
    flexGrow:1,
    justifyContent: 'center'
  },
  logoText: {
    color: '#FFF',
    marginTop:10
  },
  heading: {
    color: '#FFF',
    fontWeight:'900',
    fontSize:20
  }
})

AppRegistry.registerComponent('Login', () => Login);
  