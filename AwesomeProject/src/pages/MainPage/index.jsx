import React, { useRef, useState} from 'react'
import { Text, View, Image, TextInput, TouchableOpacity, Alert } from 'react-native'
import styles from "./MainPage.style";
import data from "../../../db/usersdB.json";
import { useData } from '../../context/userContext';
const MainPage = () => {
  const {setUser} = useData();
  const email = useRef();
  const password = useRef();
  function handlePress() {
    if(email.current.value.length > 3 && password.current.value.length >3){
     const user = data.users.find((item) => item.email == email.current.value && item.password == password.current.value)
     if(user){
       setUser(user);
     }else{
      Alert.alert("Password or email did not match")
     }
    }else{
    Alert.alert("password and email can not be empty")
    }
  }
  return (
    <View style={styles.container}>
      <View style={styles.main}>
        <Image
          source={require("../../../img/logo2.png")}
          style={styles.imageStyle}
        />
        <Text style={styles.company}>Awesome App</Text>
        <TextInput
          style={styles.input}
          blurOnSubmit={true}
          inputMode="text"
          placeholder='Type an E-mail...'
          ref={email}
        onChangeText={(e) => email.current.value = e}
        // value={text}

        />
        <TextInput
          style={styles.input}
          blurOnSubmit={true}
          inputMode="text"
          placeholder='Password...'
          ref={password}
        onChangeText={(e) => password.current.value = e}
        // value={text}
        />
        <TouchableOpacity onPress={() => handlePress()} style={styles.button}>
          <Text style={styles.textColor}>Log In</Text>
        </TouchableOpacity>
        <TouchableOpacity>
          <Text style={styles.link}>or create an account on this link!</Text>
        </TouchableOpacity>
      </View>
    </View>
  )
}

export default MainPage