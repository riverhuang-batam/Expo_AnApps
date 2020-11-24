import React from 'react'
import { ActivityIndicator } from 'react-native'
import LottieView from 'lottie-react-native'
const ActivityIndicator = ({visible = false}) => {
    if(!visible) return null
    return(
        <ActivityIndicator/>
    )
}
export default ActivityIndicator;