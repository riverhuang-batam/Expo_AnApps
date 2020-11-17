import React from "react";
import { View, StyleSheet, Image, TouchableHighlight } from "react-native";
import AppText from "../AppText";
import colors from "../../config/colors";
const ListItem = ({ title, subTitle, image, IconComponent, onPress }) => {
  return (
    <TouchableHighlight onPress={onPress} underlayColor={colors.light}>
    <View style={styles.container}>
      {IconComponent}
      {image && <Image style={styles.image} source={image} />}
      <View style={styles.detailsContainer}>
        <AppText style={styles.title}>{title}</AppText>
        {subTitle && <AppText style={styles.subTitle}>{subTitle}</AppText>}
      </View>
    </View>
    </TouchableHighlight>
  );
};
const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    padding: 5
  },
  detailsContainer:{
      flexDirection: "column",
      marginLeft: 15,
      justifyContent: 'center'
  },
  title: {
    fontSize: 18,
  },
  subTitle: {
    fontSize: 16,
    color: colors.medium,
  },
  image: {
    width: 70,
    height: 70,
    borderRadius: 35,
    borderColor: colors.light,
    borderWidth: 2,
  },
});
export default ListItem;
