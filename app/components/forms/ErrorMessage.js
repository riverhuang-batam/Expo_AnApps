import React from 'react'
import {StyleSheet} from 'react-native'
import AppText from '../AppText'

const ErrorMessage = ({error, visible}) => {
    // if(!visible || !error) return null
    console.log(error)
    return(
    <AppText style={{color: "red"}}>{error}</AppText>
    )
}
export default ErrorMessage;
