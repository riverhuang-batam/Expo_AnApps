import React, { useState, useContext } from "react";
import {
  Image,
  StyleSheet,
  TouchableWithoutFeedback,
  KeyboardAvoidingView,
} from "react-native";

import axios from "axios";
import jwt_decode from "jwt-decode";
import {SERVER_URI} from 'react-native-dotenv'
import {AppForm, AppFormField, SubmitButton} from '../components/forms'

import AppButton from "../components/AppButton";
import Screens from "../components/Screens";
import AuthContext from "../auth/context";
import useAuth from '../auth/useAuth'
import * as Yup from 'yup'
import ErrorMessage from "../components/forms/ErrorMessage";

const validationSchema = Yup.object().shape({
  email: Yup.string().required().email().label("Email"),
  password: Yup.string().required().min(4).label("Password"),
});

const LoginScreen = ({ navigation }) => {
  const {loading, setLoading, toast, setToast, toastShow, setToastShow} = useContext(AuthContext)
  const auth = useAuth()
  const [visible, setVisible] = useState(false)
  
  const loginSubmit = async(values) => {
    try {
      console.log(`${SERVER_URI}user/login`)
      setLoading(true)
      const response = await axios.post(`${SERVER_URI}user/login`, { email: values.email, password: values.password })  
      auth.logIn(response.data.token)
      setLoading(false)
    } catch (error) {
      console.log(error)
      setVisible(true)
    }
  }
      
  return (
    <Screens>
      <Image style={styles.image} source={require("../../assets/an-apps-logo.png")} />
      <KeyboardAvoidingView
      behavior={Platform.OS == 'ios' ? 'padding' : 'height'}
      style={styles.container}>
      <AppForm
        initialValues = {{email: '', password: ''}}
        validationSchema={validationSchema}
        onSubmit={values => {
          loginSubmit(values)
        }}
      >
        <ErrorMessage  error="Invalid email and/or password" visible={visible} />
    <AppFormField
        name="email"
        icon="email"
        placeholder="email"
        autoCapitalize="none"
        autoCorrect={false}
        keyboardType="email-address"
        textContentType="emailAddress"
      />

      <AppFormField
      name="password"
        placeholder="password"
        autoCapitalize="none"
        icon="lock"
        textContentType="password"
        secureTextEntry={true}
        />
        
      <SubmitButton title="Login"/>
      </AppForm>
      <AppButton onPress={() => navigation.navigate("RegisterScreen")}>
        Register
      </AppButton>
      </KeyboardAvoidingView>
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
