import React from 'react'
import {View} from 'react-native'
import AppButton from '../components/AppButton'
import AppTextInput from '../components/AppTextInput'
const RegisterScreen = () => {
    return(
        <View>
            <AppTextInput placeholder="email" />
            <AppTextInput placeholder="password" />
            <AppButton>Register</AppButton>
        </View>
    )
}
export default RegisterScreen;