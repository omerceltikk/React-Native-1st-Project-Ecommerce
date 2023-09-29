
import React from "react";
import { Alert, Button, StyleSheet, Text, View } from "react-native";
import ListPage from "./pages/ListPage";
import MainPage from "./pages/MainPage";
import { UserProvider, useData } from "./context/userContext";
function App() {

  return (
    <UserProvider>
      <View>
        {/* <MainPage /> */}
        <ListPage/>

      </View>
    </UserProvider>
  )
}

export default App;
