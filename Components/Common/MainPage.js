/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, { Component } from 'react';
import { AppRegistry, StyleSheet, Text, View, Button, Alert, Navigator } from 'react-native';
import OnBoard from './onboard';
export default class MainPage extends Component {

  next = () => {
    this.props.navigator.push({
      id: 'MyScene'
    })
  }

  render() {

    return (
      <View style={styles.container}>
        <Text>PickerApp
        </Text>
        <View>
          <Button
            onPress={this.next}
            title="Learn More"
            color="#841584"
            accessibilityLabel="Learn more about this purple button"
          />
        </View>  
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  welcome: {
    fontSize: 20,
    textAlign: 'center',
    margin: 10,
  },
  instructions: {
    textAlign: 'center',
    color: '#3498db',
    marginBottom: 5,
  },
  mainText: {
    color:'white'
  }
});