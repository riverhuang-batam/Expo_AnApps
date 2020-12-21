import React from "react";
import { View, Text, TouchableOpacity, StyleSheet } from "react-native";
import colors from "../config/colors";

const AppButton = ({ title, children, style, onPress, disabled }) => {
  return (
    <TouchableOpacity onPress={onPress} disabled={disabled}>
    <View style={[styles.buttons, style, {backgroundColor: !disabled ? colors.primary : colors.disabled }]}>
  <Text style={styles.text}>{children}{title}</Text>
    </View>
    </TouchableOpacity>
  );
};
const styles = StyleSheet.create({
  buttons: {
    
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
