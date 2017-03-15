import React, { Component } from 'react';
import { View, Text, StyleSheet } from 'react-native';
import MapView from 'react-native-maps';

export default class Locate extends Component {
  constructor(props) {
    super(props);
    this.state = {
      markers:[]
    }
  }
  render() {
    return (
      <MapView
        style={styles.container}
        initialRegion={{
          latitude: 45.5209087,
          longitude: -122.6705107,
          latitudeDelta: 0.0922,
          longitudeDelta: 0.0421,
        }}
      />  
    );  
  }
}

const styles = StyleSheet.create({
  container: {
    flex:1
  }
})