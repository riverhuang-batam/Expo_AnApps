import React from 'react'
import {createStackNavigator} from '@react-navigation/stack'
import AccountScreen from "../screens/AccountScreen";
import SettingScreen from "../screens/SettingScreen";
const Stack = createStackNavigator();
const AuthNavigator = () => {
    return(
          <Stack.Navigator> 
            <Stack.Screen name="AccountScreen" component={AccountScreen} options={{
              headerShown: false
            }}/> 
            <Stack.Screen name="Setting" component={SettingScreen} options={{
              headerShown: false
            }}/> 
          </Stack.Navigator> 
    )
}
export default AuthNavigator;