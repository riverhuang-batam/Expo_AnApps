import React, {useContext} from "react";
import { View, Image, StyleSheet, Button, Alert, KeyboardAvoidingView } from "react-native";
import * as Yup from "yup";
import AppButton from "../components/AppButton";
import AppTextInput from "../components/AppTextInput";
import ActivityIndicatorLottieView from '../components/ActivityIndicatorLottieView'
import { AppForm, AppFormField, SubmitButton } from "../components/forms/";
import axios from "axios";
import { SERVER_URI } from "react-native-dotenv";
import Screens from "../components/Screens";
import AuthContext from '../auth/context'
import Toast from '../components/Toast'
import colors from "../config/colors";

const validationSchema = Yup.object().shape({
  username: Yup.string().required().min(4).label("Username"),
  email: Yup.string().required().email().label("Email"),
  password: Yup.string().required().min(6).label("Password"),
});
const RegisterScreen = ({navigation}) => {
  const {loading, setLoading, toast, setToast, toastShow, setToastShow} = useContext(AuthContext)

  // const registerSubmit = (values) => {
  //   // console.log(values);
  //   // console.log("test");
  //   console.log(`${SERVER_URI}user/signup`)
  //   axios
  //     .post(`${SERVER_URI}user/signup`, {
  //       username: values.username,
  //       email: values.email,
  //       password: values.password,
  //     })
      
  //     .then(() => {
        
  //       setLoading(true)
        
  //       console.log(loading)
  //       // console.log(toastShow, '................................')
  //     })
  //     .then(() => 
  //       setLoading(false)
  //     )
      
  //     .catch((err) => console.log(err));
  // };
  const registerSubmit = async(values) => {
    try{
      setLoading(true)
      const response = await axios
      .post(`${SERVER_URI}user/signup`, {
        username: values.username,
        email: values.email,
        password: values.password,
      })
      await navigation.navigate("LoginScreen")
      await setLoading(false)
      Alert.alert('Register Success', 'Your registeration is success try to login')
    }catch (err){
      console.log(err)
    }
      
  };
  return (
    <>
      
    
    <Screens>
      <KeyboardAvoidingView
behavior='position'
keyboardVerticalOffset={Platform.OS ===' ios' ? 0 : -85}
>
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
      </KeyboardAvoidingView>
    </Screens>
    </>
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
