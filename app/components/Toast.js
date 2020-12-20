import React, {useContext} from 'react'
import {View, Text, StyleSheet, StatusBar} from 'react-native'
import colors from '../config/colors';
import AuthContext from '../auth/context'

const Toast = ({children, visible = false, style}) => {
    // const NetInfo = useNetInfo();
    // console.log(NetInfo)
    
    const authContext = useContext(AuthContext);
    setTimeout(() => {
        authContext.setToastShow(false)
    },3000)
    if(visible)
        return(
            <View style={[styles.container, style]}>
                <Text style={styles.Text}>{children}</Text>
            </View>
        )
    return null
}
const styles = StyleSheet.create({
    container: {
        position: "absolute",
        width: '100%',
        padding: 20,
        zIndex: 3,
        // marginHorizontal:20,
        // marginTop: 20,
        justifyContent: "center",
        alignItems: 'center',
        // backgroundColor: colors.primary,
    },
    Text: {
        color: colors.white
    }
})
export default Toast;