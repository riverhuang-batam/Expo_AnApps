import React, {useContext} from "react";
import { View, FlatList, StyleSheet } from "react-native";
import ListItem from "../components/lists/ListItem";
import ListItemSeparator from "../components/lists/ListItemSeparator";
import AppIcon from "../components/AppIcon";
import colors from "../config/colors";
import Screens from "../components/Screens";
import AuthContext from '../auth/context';
import useAuth from '../auth/useAuth'
const menuItems = [
  {
    title: "Listing",
    targetScreen: "Messages",
    icon: {
      name: "format-list-bulleted",
      backgroundColor: colors.primary,
      color: colors.white,
    },
  },
  {
    title: "Settings",
    targetScreen: "Setting",
    icon: {
      name: "settings",
      backgroundColor: colors.primary,
      color: colors.white,
    },
  },
  {
    title: "Messages",
    targetScreen: "Messages",
    icon: {
      name: "email",
      backgroundColor: colors.primary,
      color: colors.white,
    },
  },
];
const AccountScreen = ({navigation}) => {
  const authContext = useContext(AuthContext)
  const auth = useAuth()
  console.log(authContext)
  return (
    <Screens style={styles.screen}>
      <View style={styles.container}>
        <ListItem image={require("../../assets/logo.png")} title={authContext.user.username} subTitle="still code on version 0.0.1" />
      </View>
      <View style={styles.container}>
        <FlatList
          data={menuItems}
          keyExtractor={(item) => item.title}
          ItemSeparatorComponent={ListItemSeparator}
          renderItem={({ item }) => (
            <ListItem
            // onPress={() => navigation.navigate(item.targetScreen)}
              title={item.title}
              IconComponent={
                <AppIcon name={item.icon.name} backgroundColor={item.icon.backgroundColor} />
              }
            />
          )}
        />
        <View style={styles.container}>
          <ListItem title="Logout" onPress={() => auth.logOut()} IconComponent={<AppIcon name="logout" backgroundColor="red" />}/>
        </View>
        <View style={styles.container}>
          <ListItem subTitle="Version 0.0.1" />
        </View>
      </View>
    </Screens>
  );
};
const styles = StyleSheet.create({
  container: {
    marginVertical: 15,
  },
  screen: {
    backgroundColor: colors.white,
  },
});
export default AccountScreen;
