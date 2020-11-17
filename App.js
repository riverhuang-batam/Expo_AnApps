import React, {useState, useEffect} from "react";
import { StatusBar } from "expo-status-bar";
import axios from 'axios'
import "react-native-gesture-handler";
import { StyleSheet, Text, View, Image } from "react-native";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";

import AppNavigator from "./app/navigation/AppNavigator";
import AuthNavigator from "./app/navigation/AuthNavigator";
import OfflineNotice from "./app/components/OfflineNotice";
import AuthContext from './app/auth/context'
import {SERVER_URI} from 'react-native-dotenv'
import {getPetList} from './app/api/api'
const Stack = createStackNavigator();
const App = () => {
  const [user, setUser] = useState()
  useEffect(() => {
    console.log(SERVER_URI)
    // getPetList()
    console.log(user)
  }, [user])
  return (
    <AuthContext.Provider value={{user, setUser}}>
    <OfflineNotice/>
    <NavigationContainer>
      {
        user ? <AppNavigator/> : 
        <AuthNavigator />
      }
    </NavigationContainer>
    </AuthContext.Provider>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});
export default App;