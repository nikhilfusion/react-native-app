/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, { Component } from 'react';
import { AppRegistry, StyleSheet, Text, View, Button, Alert, Navigator } from 'react-native';

import UserList from './UserList';
import MyScene from './MyScene';
import Locate from './Locate';
import { TabViewAnimated, TabBar } from 'react-native-tab-view';

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  listStyle : {
    flex: 1,
    paddingTop: 22,
    paddingLeft:20
  },
  page: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  heading: {
    fontWeight:'bold'
  }
});

export default class TabView extends Component {
  state = {
    index: 0,
    routes: [
      { key: '1', title: 'User List' },
      { key: '2', title: 'Add User' },
      { key: '3', title: 'Locate us' }
    ],
  };

  _handleChangeTab = (index) => {
    this.setState({ index });
  };

  _renderHeader = (props) => {
    return <TabBar {...props} />;
  };

  _renderScene = ({ route }) => {
    switch (route.key) {
    case '1':
      return (
        <View style={styles.listStyle}>
          <UserList/>
        </View>
      );  
    case '2':
      return (
        <View>
          <MyScene/>
        </View>
      );
    case '3':
      return (
        <View>
          <Locate/>
        </View>
      );   
    default:
      return null;
    }
  };

  render() {
    return (
      <TabViewAnimated
        style={styles.container}
        navigationState={this.state}
        renderScene={this._renderScene}
        renderHeader={this._renderHeader}
        onRequestChangeTab={this._handleChangeTab}
      />
    );
  }
}

AppRegistry.registerComponent('TabView', () => TabView);