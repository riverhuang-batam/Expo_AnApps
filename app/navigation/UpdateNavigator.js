import React from 'react'
import {createStackNavigator} from '@react-navigation/stack'
import ListDetailScreen from "../screens/ListDetailScreen";
import ListUpdateScreen from '../screens/ListUpdateScreen'
const Stack = createStackNavigator();
const AuthNavigator = () => {
    return(
          <Stack.Navigator> 
            <Stack.Screen name="ListDetailScreen" component={ListDetailScreen} options={{
              headerTransparent: true
            }}/> 
            <Stack.Screen name="ListUpdateScreen" component={ListUpdateScreen} options={{
              headerTransparent: true
            }}/> 
          </Stack.Navigator> 
    )
}
export default AuthNavigator;