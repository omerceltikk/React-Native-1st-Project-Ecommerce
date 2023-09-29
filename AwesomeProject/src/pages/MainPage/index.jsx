import React from 'react'
import { StyleSheet, Text, View, Image, TextInput, TouchableOpacity } from 'react-native'
import Logo from "../../../img/logo.png"

const MainPage = () => {
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
        // onChangeText={(e) => HandleChange(e)}
        // value={text}
        />
        <TextInput
          style={styles.input}
          blurOnSubmit={true}
          inputMode="password"
          placeholder='Password...'
        // onChangeText={(e) => HandleChange(e)}
        // value={text}
        />
        <TouchableOpacity style={styles.button}> 
          <Text style={styles.textColor}>Submit</Text>
        </TouchableOpacity>
      </View>
    </View>
  )
}
const styles = StyleSheet.create({
  container: {
    // justifyContent: "center",
    alignItems: "center",
    height: "100%",
    backgroundColor: "#ededed"
  },
  main: {
    display: "flex",
    flexDirection: "column",
    gap: 20,
    width: "100%",
    marginTop:40,
    padding: 50,

  },
  input: {
    borderRadius: 100,
    paddingHorizontal: 20,
    backgroundColor: "#dadada",
  },
  imageStyle: {
    zIndex: 1,
    width: 400,
    height: 300,
    alignSelf:"center",

  },
  button:{
    padding:10,
    paddingHorizontal:60,
    // width:"50%",
    textAlign:"center",
    alignSelf:"center",
    backgroundColor:"#E74646",
    borderRadius:100,
    color:"#fff"
    
  },
  company:{
    fontWeight:"700",
    fontSize:35,
    textAlign:"center",
    color:"#E74646",
    marginBottom:10
  },
  textColor:{
    color:"#fff"
  }
})
export default MainPage