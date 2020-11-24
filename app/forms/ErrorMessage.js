import React from 'react'
import {StyleSheet} from 'react-native'
import AppText from '../components/AppText'

const ErrorMessage = ({error}) => {
    return(
    <AppText style={{color: "red"}}>{error}</AppText>
    )
}
export default ErrorMessage;