import React, { Component } from 'react';
import { View, Text, StyleSheet } from 'react-native';
import MapView from 'react-native-maps';

export default class Locate extends Component {
  constructor(props) {
    super(props);
    this.state = {
      coordinate :  {
        latitude: 19.08095,
        longitude: 72.88648599999999
      },  
      title: "PharmEasy",
      description: "91 media street, Kurla",
      latitudeDelta: 0.0922,
      longitudeDelta: 0.0421,
    }
  }
  render() {
    return (
        <MapView
          style={styles.container}
          initialRegion={{
            latitude: this.state.coordinate.latitude,
            longitude: this.state.coordinate.longitude,
            latitudeDelta: this.state.latitudeDelta,
            longitudeDelta: this.state.longitudeDelta,
            title: this.state.title,
            description: this.state.description
          }}
        >  
          <MapView.Marker
            coordinate={{
              latitude:this.state.coordinate.latitude,
              longitude:this.state.coordinate.longitude
            }} 
            title = {this.state.title}
            description = {this.state.description}
          />
        </MapView>  
    );  
  }
}

const styles = StyleSheet.create({
  container: {
    flex:1
  }
})