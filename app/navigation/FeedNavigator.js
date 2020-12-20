import React from 'react'
import {createStackNavigator} from '@react-navigation/stack'
import ListDetailScreen from "../screens/ListDetailScreen";
import ListScreen from '../screens/ListScreen'
import ListUpdateScreen from '../screens/ListUpdateScreen'
const Stack = createStackNavigator();
const AuthNavigator = () => {
    return(
          <Stack.Navigator screenOptions={{
            headerTintColor: "white",
            
          }}> 
            <Stack.Screen name="ListScreen" component={ListScreen} options={{
              headerShown: false
            }}/> 
            <Stack.Screen name="ListDetailScreen" component={ListDetailScreen} options={{
              headerTransparent: true,
              headerBackTitleVisible: true,
              headerTintColor: 'black',
              title: false
            }}/> 
            <Stack.Screen name="ListUpdateScreen" component={ListUpdateScreen} options={{
              headerShown: false
            }}/> 
          </Stack.Navigator> 
    )
}
export default AuthNavigator;