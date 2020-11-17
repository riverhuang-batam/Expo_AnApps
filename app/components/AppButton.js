import React from "react";
import { View, Text, TouchableOpacity, StyleSheet } from "react-native";

const AppButton = ({ children, style, onPress }) => {
  return (
    <TouchableOpacity onPress={onPress}>
    <View style={[styles.buttons, style]}>
      <Text style={styles.text}>{children}</Text>
    </View>
    </TouchableOpacity>
  );
};
const styles = StyleSheet.create({
  buttons: {
    backgroundColor: "green",
    borderRadius: 25,
    justifyContent: "center",
    alignItems: "center",
    padding: 15,
    width: '100%',
    marginVertical: 10
  },
  text: {
      color: 'white',
      fontSize: 20
  }
});
export default AppButton;
