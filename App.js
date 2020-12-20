import React, { useState, useEffect } from "react";
import { StatusBar } from "expo-status-bar";
import axios from "axios";
import "react-native-gesture-handler";
import { StyleSheet, Text, View, Image, AsyncStorage } from "react-native";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import AppNavigator from "./app/navigation/AppNavigator";
import AuthNavigator from "./app/navigation/AuthNavigator";
import OfflineNotice from "./app/components/OfflineNotice";
import AuthContext from "./app/auth/context";
import { SERVER_URI } from "react-native-dotenv";
import { getPetList } from "./app/api/api";
import Toast from './app/components/Toast'
import colors from "./app/config/colors";
import authStorage from "./app/auth/storage";
import { AppLoading } from "expo";
import { AppearanceProvider, useColorScheme } from "react-native-appearance";


const Stack = createStackNavigator();
// const colorScheme = useColorScheme();
const App = () => {
  const [user, setUser] = useState();
  const [isReady, setIsReady] = useState(false);
  const [loading, setLoading] = useState(false);
  const [toast, setToast] = useState('');
  const [toastShow, setToastShow] = useState(false);
  const [cartData, setCartData] = useState([]);
  const [allPrice, setAllPrice] = useState(0);

  const getCart = async () => {
    const result = await AsyncStorage.getItem("cart");
    if (result) {
      const data = await JSON.parse(result);
      await setCartData(data);
      // console.log(data);
      const dataPrice = await data.reduce((value, num) => {
        return value + num.price;
      }, 0);
      setAllPrice(dataPrice);
    }
  };
  const restoreUser = async () => {
    const user = await authStorage.getUser();
    if (user) setUser(user);
  };

  useEffect(() => {
    getCart();
  }, [setCartData, setAllPrice]);

  if (!isReady) {
    return (
      <AppLoading startAsync={restoreUser} onFinish={() => setIsReady(true)} />
      );
    }
    return (
      <>
    <AuthContext.Provider
      value={{
        user,
        setUser,
        loading,
        setLoading,
        toast,
        setToast,
        toastShow,
        setToastShow,
        cartData,
        setCartData,
        allPrice,
        setAllPrice,
        getCart,
      }}
    >
      <OfflineNotice />
          <NavigationContainer>
            {user ? <AppNavigator /> : <AuthNavigator />}
          </NavigationContainer>
    </AuthContext.Provider>
    </>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});
export default App;
