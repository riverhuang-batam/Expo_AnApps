import React, { useState, useContext } from "react";
import {
  Image,
  StyleSheet,
  Text,
  TouchableWithoutFeedback,
} from "react-native";

import axios from "axios";
import jwt_decode from "jwt-decode";
import {SERVER_URI} from 'react-native-dotenv'
import {Formik} from 'formik'

import AppButton from "../components/AppButton";
import Screens from "../components/Screens";
import AppTextInput from "../components/AppTextInput";
import AppText from "../components/AppText";
import ErrorMessage from '../forms/ErrorMessage'
import AuthContext from "../auth/context";
import * as Yup from 'yup'

const validationSchema = Yup.object().shape({
  email: Yup.string().required().email().label("Email"),
  password: Yup.string().required().min(6).label("Password")
})

const LoginScreen = ({ navigation }) => {
  const authContext = useContext(AuthContext);

  
  

  const loginFunction = (values) => {
      console.log(values)
    axios
      .post(`${SERVER_URI}user/login`, { email: values.email, password: values.password })
      .then((log) => authContext.setUser(jwt_decode(log.data.token)))
      // .then(logs => authContext.setUser(logs))
      .catch((err) => console.log(err));
    console.log(values.email, values.password);

  };
  return (
    <Screens>
      <Image style={styles.image} source={require("../../assets/an-apps-logo.png")} />
      <Formik
        initialValues = {{email: '', password: ''}}
        onSubmit={values => loginFunction(values)}
        validationSchema={validationSchema}
      >
{ ({handleChange, handleSubmit, errors })  => (
  
    <>
    {console.log(errors)}
    <AppTextInput
        placeholder="email"
        
        onChangeText={handleChange("email")}
        icon="email"
        autoCapitalize="none"
        textContentType="emailAddress"
        keyboardType="email-address"
      />
      <ErrorMessage error={errors.Email}/>
      <AppTextInput
        placeholder="password"
        
        onChangeText={handleChange("password")}
        autoCapitalize="none"
        icon="lock"
        textContentType="password"
        secureTextEntry={true}
        
        />
        <ErrorMessage error={errors.Password}/>
      <AppButton onPress={handleSubmit}>
        Login
      </AppButton>
      <AppButton onPress={() => navigation.navigate("RegisterScreen")}>
        Register
      </AppButton>
      <AppText style={{color: "red"}}>{errors.email}</AppText>
      </>
)}
      
      </Formik>
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
export default LoginScreen;
