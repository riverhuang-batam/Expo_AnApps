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
import authStorage from './app/auth/storage'
import { AppLoading } from "expo";
import { AppearanceProvider, useColorScheme } from 'react-native-appearance';

const Stack = createStackNavigator();
// const colorScheme = useColorScheme();
const App = () => {
  const [user, setUser] = useState()
  const [isReady, setIsReady] = useState(false)
  const restoreUser = async() => {
    const user = await authStorage.getUser();
    if(user) setUser(user)
  }
  
  useEffect(() => {
    // restoreUser()
  }, [])

  if(!isReady){
    return(
      <AppLoading startAsync={restoreUser} onFinish={() => setIsReady(true)}/>
    )
  }
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