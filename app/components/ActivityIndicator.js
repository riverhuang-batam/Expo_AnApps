import React from 'react'
import { ActivityIndicator, View, StyleSheet } from 'react-native'
import LottieView from 'lottie-react-native'
import colors from '../config/colors'
const AppActivityIndicator = ({visible = false}) => {
    if(!visible) return null
    return(
        <View style={styles.overlay}>
            <ActivityIndicator visible={visible} color={colors.primary}/>
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
export default AppActivityIndicator;