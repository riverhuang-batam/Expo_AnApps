import React from 'react'
import {createStackNavigator} from '@react-navigation/stack'
import ListDetailScreen from "../screens/ListDetailScreen";
import ListScreen from '../screens/ListScreen'

const Stack = createStackNavigator();
const AuthNavigator = () => {
    return(
          <Stack.Navigator> 
            <Stack.Screen name="ListScreen" component={ListScreen} options={{
              headerShown: false
            }}/> 
            <Stack.Screen name="ListDetailScreen" component={ListDetailScreen} options={{
              headerTransparent: true
            }}/> 
          </Stack.Navigator> 
    )
}
export default AuthNavigator;