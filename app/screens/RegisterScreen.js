import React from 'react'
import {View, Image, StyleSheet} from 'react-native'
import * as Yup from 'yup'
import AppButton from '../components/AppButton'
import AppTextInput from '../components/AppTextInput'

const validationSchema = Yup.object().shape({
  email: Yup.string().required().email().label("Email"),
  username: Yup.string().required().min(4).label("Username"),
  password: Yup.string().required().min(6).label("Password")
})

const RegisterScreen = () => {
    return(
        <View>
            <Image style={styles.image} source={require("../../assets/an-apps-logo.png")} />
            <AppTextInput
        placeholder="email"

        icon="email"
        autoCapitalize="none"
        textContentType="emailAddress"
        keyboardType="email-address"
      />
      <AppTextInput
        placeholder="username"
        // value={username}
        // onChangeText={(text) => setPassword(text)}
        autoCapitalize="none"
        icon="account"
        
      />
      <AppTextInput
        placeholder="password"
        // value={password}
        // onChangeText={(text) => setPassword(text)}
        autoCapitalize="none"
        icon="lock"
        textContentType="password"
        secureTextEntry={true}
      />
            <AppButton>Register</AppButton>
        </View>
    )
}

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