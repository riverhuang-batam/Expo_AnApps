import React from "react";
import { View, Image, StyleSheet, Alert } from "react-native";
import * as Yup from "yup";
import AppButton from "../components/AppButton";
import AppTextInput from "../components/AppTextInput";
import { AppForm, AppFormField, SubmitButton } from "../components/forms/";
import axios from "axios";
import { SERVER_URI } from "react-native-dotenv";
import Screens from "../components/Screens";
import Toast from 'react-native-toast-message';

const validationSchema = Yup.object().shape({
  username: Yup.string().required().min(4).label("Username"),
  email: Yup.string().required().email().label("Email"),
  password: Yup.string().required().min(6).label("Password"),
});

const RegisterScreen = ({navigation}) => {
  const registerSubmit = (values) => {
    console.log(values);
    console.log("test");
    axios
      .post(`${SERVER_URI}user/signup`, {
        username: values.username,
        email: values.email,
        password: values.password,
      })
      .then(() => {
        
        // Toast.show({
        //   // type: 'success | error | info',
        //   position: 'top | bottom',
        //   text1: 'Hello',
        //   text2: 'This is some something 👋',
        //   visibilityTime: 4000,
        //   autoHide: true,
        //   topOffset: 30,
        //   bottomOffset: 40,
        //   // onShow: () => {},
        //   // onHide: () => {}
        // })
        navigation.navigate("LoginScreen")
      })
      .then(() => alert('Register Success'))
      .catch((err) => console.log(err));
  };
 
  return (
    <Screens>
      <AppForm
        initialValues={{ email: "", username: "", password: "" }}
        onSubmit={(values) => registerSubmit(values)}
        validationSchema={validationSchema}
      >
        
          <Image
            style={styles.image}
            source={require("../../assets/an-apps-logo.png")}
          />
          <AppFormField
            name="email"
            placeholder="email"
            icon="email"
            autoCapitalize="none"
            textContentType="emailAddress"
            keyboardType="email-address"
          />
          <AppFormField
            name="username"
            placeholder="username"
            autoCapitalize="none"
            icon="account"
            autoCapitalize="none"
          />
          <AppFormField
            name="password"
            placeholder="password"
            autoCapitalize="none"
            icon="lock"
            textContentType="password"
            secureTextEntry={true}
          />
          <SubmitButton title="Register" />
          <AppButton onPress={() => navigation.navigate("LoginScreen")}>
        Login
      </AppButton>
      </AppForm>
    </Screens>
  );
};

const styles = StyleSheet.create({
  button: {
    backgroundColor: "red",
    width: 5,
    height: 5,
    padding: 100,
  },
  image: {
    width: "70%",
    height: 150,
  },
});
export default RegisterScreen;
