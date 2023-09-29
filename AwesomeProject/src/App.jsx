
import React from "react";
import { Alert, Button, StyleSheet, Text,View } from "react-native";
import ListPage from "./pages/ListPage";
import MainPage from "./pages/MainPage";

function App() {
  
  return(
    <View style={styles.container}>
      <MainPage/>
   <ListPage/>
    </View>
  )
}
const styles = StyleSheet.create({
  conitaner:{
    
  }
})
export default App;
