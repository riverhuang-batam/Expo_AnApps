import React, {useContext} from 'react'
import {Image, StyleSheet, Text, TouchableWithoutFeedback} from 'react-native'
import AppButton from '../components/AppButton'
import jwt_decode from 'jwt-decode'
import Screens from '../components/Screens'
import AppTextInput from '../components/AppTextInput'
import axios from 'axios'
import AuthContext from '../auth/context'
const LoginScreen = ({navigation}) => {
    const authContext = useContext(AuthContext)
    const loginFunction = () => {
        axios.post('http:192.168.1.4:9001/user/login', {"email": "tester@gmail.com",
        "password": "tester"}).then(log => authContext.setUser(jwt_decode(log.data.token)))
        // .then(logs => authContext.setUser(logs))
        .catch(err => console.log(err))
    }
    return(
        <Screens>
            <Image style={styles.image} source={require('../../assets/logo.png')}/>
            <AppTextInput placeholder="email" />
            <AppTextInput placeholder="password" />
            <AppButton onPress={() => loginFunction()}>Login</AppButton>
            <AppButton onPress={() => navigation.navigate('RegisterScreen')}>Register</AppButton>
        </Screens>
    )
}
const styles = StyleSheet.create({
    button: {
        backgroundColor: 'red',
        width: 5,
        height:5,
        padding: 100
    },
    image:{
        width: '100%',
        height: 150
    }
})
export default LoginScreen;