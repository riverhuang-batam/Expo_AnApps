import React, { useState } from "react";
import { View, FlatList, StyleSheet, Button, AsyncStorage } from "react-native";
import ListItemSeparator from "../components/lists/ListItemSeparator";
const SettingScreen = () => {
  const [darkMode, setDarkMode] = useState(true);
  const storeItem = async(value) => {
    const state = value
    const result = await AsyncStorage.setItem("keys", value);
    if(result){
        console.log(result)
    }

  };
  const getItem = async() => {

    const result = await AsyncStorage.getItem("keys");
    if(result){
        console.log(JSON.parse(result))
    }

  };
  const removeItem = async() => {

    const result = await AsyncStorage.removeItem("keys");
    if(result){
        console.log(result)
    }

  };
  return (
    <View style={{marginTop: 100}}>
      {/* <Switch value={darkMode} onChange={(value) => setDarkMode(value)} /> */}
      <Button title="store" onPress={() => storeItem({test: 'test yes'})} />
      <Button title="get" onPress={() => getItem()} />
      <Button title="remove" onPress={() => removeItem()} />
    </View>
  );
};
export default SettingScreen;
