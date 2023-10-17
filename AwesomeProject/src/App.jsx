
import React from "react";
import {View } from "react-native";
import { UserProvider } from "./context/userContext";
import General from "./pages/General";
function App() {
  return (
    <UserProvider>
      <View>
        <General />
      </View>
    </UserProvider>
  )
}

export default App;
