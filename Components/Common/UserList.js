import React, { Component } from 'react';
import { AppRegistry, ListView, Text, View, StyleSheet } from 'react-native';
import api from '../../Utility/api';
export default class UserList extends Component {
  
  // Initialize the hardcoded data
  constructor(props) {
    super(props);
    this.state = {
      userList: new ListView.DataSource({rowHasChanged: (r1, r2) => r1 !== r2})
    };
  }

  componentWillMount() {
    api.getUsers().then((res) => {
        this.setState({
          userList: this.state.userList.cloneWithRows(res)
        })
    })
  }

  render() {
    console.log("state is", this.state.userList);
    return (
      <View style={{flex: 1, paddingTop: 22}}>
        <Text style={styles.header}>List of Users</Text>
        <ListView
          dataSource={this.state.userList}
          renderRow={
            (rowData, index) => <Text style={styles.textStyle}>{rowData.id}. {rowData.name}</Text>
          }
        />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  listStyle : {
    flex: 1
  },
  textStyle : {
    paddingLeft:30,
    fontSize:14
  },
  header : {
    fontWeight:'bold',
    paddingLeft:30,
    fontSize:16
  }
})

AppRegistry.registerComponent('UserList', () => UserList);