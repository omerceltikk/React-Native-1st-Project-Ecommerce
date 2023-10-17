
import React from "react";
import ListPage from "./pages/ListPage";
import MainPage from "./pages/MainPage";
import { UserProvider, useData } from "./context/userContext";
import { NavigationContainer } from '@react-navigation/native';
import 'react-native-gesture-handler';
import { createStackNavigator } from '@react-navigation/stack';


function App() {
  const Stack = createStackNavigator();

  return (
    <UserProvider>
      <NavigationContainer>
        <Stack.Navigator>
          <Stack.Screen name="main" component={MainPage} options={{
            title: 'Log In',
            headerStyle: {
              backgroundColor: '#E74646',
            },
            headerTintColor: '#fff',
            headerTitleStyle: {
              fontWeight: 'bold',
            },
          }} />
          <Stack.Screen name="Market" component={ListPage} options={{
            title: 'Marketplace',
            headerStyle: {
              backgroundColor: '#E74646',
            },
            headerTintColor: '#fff',
            headerTitleStyle: {
              fontWeight: 'bold',
            },
          }} />
        </Stack.Navigator>
      </NavigationContainer>
    </UserProvider>
  )
}

export default App;
