import React from 'react'
import {View, StyleSheet, TextInput} from 'react-native'
import MaterialCommunityIcons from '@expo/vector-icons/MaterialCommunityIcons'
import colors from '../config/colors'
const AppTextInput = ({value, icon, placeholder, ...otherProps}) => {
    return(
        <View style={styles.textInput}>
            {icon && <MaterialCommunityIcons style={styles.icon} name={icon} size={25} color={colors.medium}/>}
            <TextInput  placeholder={placeholder} {...otherProps} />
        </View>
    )
}
const styles = StyleSheet.create({
    textInput: {
        color: colors.medium,
        flexDirection: "row",
        fontSize: 18,
        width:'100%',
        borderRadius: 25,
        padding: 15,
        backgroundColor: colors.light,
        marginVertical: 10,
    },
    icon: {
        marginRight: 15
    }
})
export default AppTextInput;