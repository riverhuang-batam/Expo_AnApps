import React from 'react'
import { View, StyleSheet } from 'react-native'
import LottieView from 'lottie-react-native'
import colors from '../config/colors'
const ActivityIndicatorLottieView = ({visible = false}) => {
    if(!visible) return null
    return(
        <View style={styles.overlay}>
            <LottieView autoPlay loop source={require('../../assets/loading.json')} />
        </View>
    )
}
const styles = StyleSheet.create({
    overlay: {
        zIndex: 5,
        opacity: 0.8,
        position: 'absolute',
        backgroundColor: colors.black,
        width: '100%',
        height: '100%',
    }
})
export default ActivityIndicatorLottieView;