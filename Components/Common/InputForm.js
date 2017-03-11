/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, { Component } from 'react';
import { StyleSheet, TextInput, View, TouchableOpacity, Text } from 'react-native';

export default class InputForm extends Component {


  constructor() {
    super();
    this.state = {
      name : '',
      password : '',
      errors : ''
    }
    this.submitLogin = this.submitLogin.bind(this);
  }
  async submitLogin() {
    if(this.state.name && this.state.password) {
      this.setState({errors : ''})
      try {
        let response = await fetch('http://jsonplaceholder.typicode.com/posts' , {
          headers: {
            'Accept': 'application/json',
            'Content-Type': 'application/json',
          },
          method: 'POST',
          body: JSON.stringify({
            title: this.state.name,
            body: this.state.password,
            userId: 1
          })
        })

        let res = await response.text();
        this.props.navigator.push({
          id: 'main'
        })
      } catch(err) {
        console.log("err is " + err);
      }
    } else {
      this.setState({errors : 'Please fill all the fields'})
    }
  }

  render() {
    return(
      <View style={styles.container} > 
        <TextInput
          placeholder='UserName'
          placeholderTextColor='#FFF'
          style={styles.input}
          onSubmitEditing={() => this.passwordInput.focus()}
          keyboardType="email-address"
          autoCorrect={true}
          borderBottomColor="#FFF"
          returnKeyLabel="Next"
          onChangeText={(val) => this.setState({name : val})}
        />
        <TextInput
          placeholder="Password"
          placeholderTextColor='#FFF'
          style={styles.input}
          secureTextEntry={true}
          ref={(input) => this.passwordInput = input}
          returnKeyLabel="Go"
          onChangeText={(val) => this.setState({password : val})}
        />
        <TouchableOpacity 
          onPress={this.submitLogin}
          style={styles.buttonContainer}
        >
          <Text style={styles.buttonText}>LOGIN</Text>
        </TouchableOpacity> 
        <Text style={styles.errors}>{this.state.errors}</Text> 
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    padding: 20
  },
  input: {
    height:40,
    backgroundColor: 'rgba(255,255,255,0.2)',
    marginBottom:20,
    paddingHorizontal:10,
    color: '#FFF'
  },
  buttonText: {
    textAlign: 'center',
    color: '#FFF',
    fontWeight: '700'
  },
  buttonContainer: {
    backgroundColor: 'rgba(255,255,255,0.2)',
    paddingVertical: 15,
    marginBottom:20
  },
  errors: {
    color: 'red',
    marginLeft: 10
  }
})  