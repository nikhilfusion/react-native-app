import React, { Component } from 'react';
import { AppRegistry, ListView, Text, View, StyleSheet } from 'react-native';

export default class UserList extends Component {
  // Initialize the hardcoded data
  constructor(props) {
    super(props);
    const ds = new ListView.DataSource({rowHasChanged: (r1, r2) => r1 !== r2});
    this.state = {
      dataSource: ds.cloneWithRows([
        'John', 'Joel', 'James', 'Jimmy', 'Jackson', 'Jillian', 'Julie', 'Devin'
      ])
    };
    console.log("this.state", this.state.dataSource);
  }
  render() {
    return (
      <ListView
        dataSource={this.state.dataSource}
        renderRow={(rowData) => <Text>{rowData}</Text>}
      />
    );
  }
}

const styles = StyleSheet.create({
  listStyle : {
    flex: 1,
    paddingTop: 22
  }
})

AppRegistry.registerComponent('UserList', () => UserList);