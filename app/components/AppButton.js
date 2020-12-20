import React from "react";
import { View, Text, TouchableOpacity, StyleSheet } from "react-native";

const AppButton = ({ title, children, style, onPress }) => {
  return (
    <TouchableOpacity onPress={onPress}>
    <View style={[styles.buttons, style]}>
  <Text style={styles.text}>{children}{title}</Text>
    </View>
    </TouchableOpacity>
  );
};
const styles = StyleSheet.create({
  buttons: {
    backgroundColor: "#6DC57C",
    borderRadius: 25,
    justifyContent: "center",
    alignItems: "center",
    padding: 15,
    width: '100%',
    marginVertical: 10
  },
  text: {
      color: 'white',
      fontSize: 18
  }
});
export default AppButton;
