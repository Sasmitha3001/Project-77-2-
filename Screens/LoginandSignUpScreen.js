import React, { Component } from 'react';
import { Alert, Modal, StyleSheet, Text, TextInput, TouchableOpacity, View, KeyboardAvoidingView, Header } from 'react-native';
import db from '../config'



export default class LoginAndSignUpScreen extends Component{
  constructor(){
    super()
    this.state={
      email:"",
      password:"",
      username:"",
      firstName:"",
      lastName:"",
      isModalVisible:'false'
    }
  }
  userSignUp=(email,password)=>{
    firebase.auth().createUserWithEmailAndPassword(email,password)
    .then(()=>{
      db.collections('users').add({
      firstName:this.state.firstName,
      lastName:this.state.lastName,
      email:this.state.email,
      password:this.state.password,
      username:this.state.username 
      })
    })

    return Alert.alert("User added successfully")

    .catch((error)=>{
      var errorCode=error.code
      var errorMessage=error.message

      return Alert.alert(errorMessage)
    })
  }

  userLogin=(email,password)=>{
    firebase.auth().signInUserWithEmailAndPassword(email,password)
    .then(()=>{
     
    })

    .catch((error)=>{
      var errosCode=error.code
      var errorMessage=error.message
      
      return Alert.alert(errorMessage)
    })
  }
  showModal=()=>{
    <Modal
    style={styles.modal}
    visible={this.state.isModalVisible}
    >
    <KeyboardAvoidingView>
    <TextInput
        style={styles.inputEmail}
        placeholder={"Enter email id"}
        onChangeText={(text)=>{this.setState({
          email:text
        })}}/>

        <TextInput
        style={styles.inputpassword}
        placeholder={"Enter password"}
        onChangeText={(text)=>{this.setState({
          password:text
        })}}/>

        <TouchableOpacity
        style={styles.login}
        onPress={()=>this.userLogin(email,password)}
        >
          <Text>Login</Text>
        </TouchableOpacity>

    </KeyboardAvoidingView>
    </Modal>

  }
  
  render(){
    return(
      <View>
        <Header title="Sign Up Screen"/>

        <TextInput
        style={styles.inputFirstName}
        placeholder={"Enter First Name"}
        maxLength={8}
        onChangeText={(text)=>{this.setState({
          firstName:text
        })}}/>

      <TextInput
        style={styles.inputLastName}
        placeholder={"Enter Last Name "}
        maxLength={10}
        onChangeText={(text)=>{this.setState({
          lastName:text
        })}}/>

        <TextInput
        style={styles.inputEmail}
        placeholder={"Enter email id"}
        onChangeText={(text)=>{this.setState({
          email:text
        })}}/>

        <TextInput
        style={styles.inputpassword}
        placeholder={"Enter password"}
        onChangeText={(text)=>{this.setState({
          password:text
        })}}/>

        <TextInput
        style={styles.inputUsername}
        placeholder={"Enter username"}
        onChangeText={(text)=>{this.setState({
          username:text
        })}}/>

      <TouchableOpacity 
      style={styles.signInButton}
      onPress={()=>{this.userSignUp(this.state.email,this.state.password,this.state.username,this.state.lastName,this.state.firstName)}}
      >
        <Text>Sign In</Text>
      </TouchableOpacity>

      <Text>Already have an account ?</Text>

      <TouchableOpacity
      style={styles.loginButton}
      onPress={()=>{this.setState({isModalVisible:"true"})}}
      >
        <Text>Login</Text>
      </TouchableOpacity>
      </View>

    )
  }
}

const styles=StyleSheet.create({
  inputUsername:{
    height:25,
    width:150,
    alignItems:'center',
    borderWidth:2,
    marginTop:50
  },
  inputpassword:{
    height:25,
    width:150,
    alignItems:'center',
    borderWidth:2,
    marginTop:50

  },
  inputFirstName:{
    height:25,
    width:150,
    alignItems:'center',
    borderWidth:2,
   
  },
  inputEmail:{
    height:25,
    width:150,
    alignItems:'center',
    borderWidth:2,
    marginTop:50

  },
  inputLastName:{
    height:25,
    width:150,
    alignItems:'center',
    borderWidth:2,
    marginTop:50,

  },
  signInButton:{
    width:200,
    height:50,
    borderRadius:25
  },
  loginButton:{
    width:200,
    height:50,
    borderRadius:25
  },
  modal:{
    flex:1,
    justifyContent:'center'
  }

})