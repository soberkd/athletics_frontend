// import { StatusBar } from "expo-status-bar";
import React, { useState, useContext } from "react";
import {
  StyleSheet,
  Text,
  View,
  Image,
  TextInput,
  Button,
  TouchableOpacity,
} from "react-native";
// import { MaterialCommunityIcons } from '@expo/vector-icons';
import { useNavigation } from '@react-navigation/native';

import { AuthContext } from "../context/AuthContext";



export default function RegisterScreen() {

  const {register} =useContext(AuthContext);
    const [username, setUserName] = useState(null);
    const [email, setEmail] = useState(null);
    const [password, setPassword] = useState(null);
    const navigation =useNavigation();
   
    return (
      <View style={styles.container}>
        <Image style={styles.image}  />
   
        {/* <StatusBar style="auto" /> */}
        <Text style={styles.loginHeader} >Register</Text> 
      <View style={styles.inputView}>
      {/* <MaterialCommunityIcons name="at" size={20} /> */}
        <TextInput
          style={styles.TextInput}
          placeholder="Username"
          placeholderTextColor="#333"
          value={username}
          onChangeText={(username) => setUserName(username)}
        />
      </View>
  
        <View style={styles.inputView}>
        {/* <MaterialCommunityIcons name="at" size={20} /> */}
          <TextInput
            style={styles.TextInput}
            placeholder="Email."
            keyboardType="email-address"
            placeholderTextColor="#333"
            value={email}
            onChangeText={(email) => setEmail(email)}
          />
        </View>
   
        <View style={styles.inputView}>
        {/* <MaterialCommunityIcons name="lock" size={20} /> */}
          <TextInput
            style={styles.TextInput}
            placeholder="Password."
            placeholderTextColor="#333"
            secureTextEntry={true}
            value= {password}
            onChangeText={(password) => setPassword(password)}
          />
        </View>   
        <TouchableOpacity style={styles.loginBtn} onPress={()=>{register(username, email,password)}}>
          <Text style={styles.loginText}>Register</Text>
        </TouchableOpacity>
  
        <View  style={styles.register}>
        <Text >Already Registered:  </Text>
        <TouchableOpacity onPress={ () => navigation.navigate('login')}>
          <Text style={styles.register_button}>Login</Text>
        </TouchableOpacity>
        </View>
        </View>
    );
  }
   
  const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: "#fff",
      alignItems: "center",
      justifyContent: "center",
      paddingHorizontal: 20,
    },
   
    image: {
      marginBottom: 40,
    },
    loginHeader: {
      fontSize: 28,
      marginBottom: 20 ,
      color: '#09899b', 
      justifyContent: "center",
  
    },
    inputView: {
      borderBottomColor:'#ccc',
      borderBottomWidth:1,
      marginBottom: 20,
      flexDirection: 'row',
    },
   
    TextInput: {
      flex: 1,
      paddingVertical:0,
      paddingLeft:10,
  
      color: '#333',
    },
   
    register_button:{
      color: '#09899b'
    },
   
    loginBtn: {
      width: "80%",
      borderRadius: 25,
      height: 50,
      alignItems: "center",
      justifyContent: "center",
      marginTop: 20,
      backgroundColor: "#09899b",
    },
    register:{
      flexDirection: 'row',
      justifyContent: "center",
      marginTop: 30,
    }
  });