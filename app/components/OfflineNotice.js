import React from 'react'
import {View, Text, StyleSheet, StatusBar} from 'react-native'
import {useNetInfo} from '@react-native-community/netinfo'
import colors from '../config/colors';


const OfflineNotice = ({}) => {
    const NetInfo = useNetInfo();
    // console.log(NetInfo)
    if(NetInfo.type !== 'Unknown' && NetInfo.isInternetReachable === false)
        return(
            
            <View style={styles.container}>
                <Text style={styles.Text}>No Internet Connection</Text>
            </View>
            
        )
    return null
}
const styles = StyleSheet.create({
    container: {
        padding: 20,
        justifyContent: "center",
        alignItems: 'center',
        backgroundColor: colors.danger,
    },
    Text: {
        color: colors.white
    }
})
export default OfflineNotice;