import React, { Component } from 'react';
import { Alert, Modal, StyleSheet, Text, TextInput, TouchableOpacity, View,KeyboardAvoidingView } from 'react-native';
import LoginAndSignUpScreen from './Screens/LoginandSignUpScreen'

export default class App extends Component{
  render(){
    return(
      <View>
        <LoginAndSignUpScreen/>
      </View>
    )
  }
  
}