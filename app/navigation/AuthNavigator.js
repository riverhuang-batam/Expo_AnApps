import React from 'react'
import {createStackNavigator} from '@react-navigation/stack'
import LoginScreen from "../screens/LoginScreen";
import RegisterScreen from "../screens/RegisterScreen";

const Stack = createStackNavigator();
const AuthNavigator = () => {
    return(
          <Stack.Navigator> 
            <Stack.Screen name="LoginScreen" component={LoginScreen} options={{
              headerShown: false
            }}/> 
            <Stack.Screen name="RegisterScreen" component={RegisterScreen} options={{
              headerShown: false
            }}/> 
          </Stack.Navigator> 
    )
}
export default AuthNavigator;