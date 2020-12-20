import React from "react";
import { View, StyleSheet, SafeAreaView, StatusBar } from "react-native";

const Screens = ({ children, style }) => {
  return (
    <SafeAreaView style={[styles.screen, style]}>
      <View style={[styles.container, style]}>{children}</View>
    </SafeAreaView>
  );
};
const styles = StyleSheet.create({
  screen: {
    paddingTop: Platform.OS === "android" ? StatusBar.currentHeight : 0,
    flex: 1,
  },
  container: {
    flex: 1,
    padding: 20,
    paddingTop:10
  },
});
export default Screens;
