import React from 'react'
import {View} from 'react-native'
// import {createStackNavigator} from '@react-navigation/stack'
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs'
import {MaterialCommunityIcons} from '@expo/vector-icons'
import ListScreen from '../screens/ListScreen'
import AddPetScreen from '../screens/AddPetScreen'
import AccountScreen from '../screens/AccountScreen'
import CartScreen from '../screens/CartScreen'
import FeedNavigator from '../navigation/FeedNavigator'
const Tab = createBottomTabNavigator();
const AppNavigator = () => {
    return(
        <Tab.Navigator>
            <Tab.Screen name="Feed" component={FeedNavigator} options={{
                tabBarIcon: ({color, size}) => (
                    <MaterialCommunityIcons name="home" color={color} size={size}/>
                )
            }} />
            {/* <Tab.Screen name="Home" component={ListScreen} options={{
                tabBarIcon: ({color, size}) => (
                    <MaterialCommunityIcons name="home" color={color} size={size}/>
                )
            }} /> */}
            <Tab.Screen name="Cart" component={CartScreen} options={{
                tabBarIcon: ({color, size}) => (
                    <MaterialCommunityIcons name="cart" color={color} size={size}/>
                )
            }} />
            <Tab.Screen name="AddPet" component={AddPetScreen} options={{
                tabBarIcon: ({color, size}) => (
                    <MaterialCommunityIcons name="plus" color={color} size={size}/>
                )
            }} />
            <Tab.Screen name="Account" component={AccountScreen} options={{
                tabBarIcon: ({color, size}) => (
                    <MaterialCommunityIcons name="account" color={color} size={size}/>
                )
            }} />
        </Tab.Navigator>
    )
}
export default AppNavigator;