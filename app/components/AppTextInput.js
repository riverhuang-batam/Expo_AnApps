import React from 'react'
import {View, StyleSheet, TextInput} from 'react-native'
import colors from '../config/colors'
const AppTextInput = ({value, placeholder, ...otherProps}) => {
    return(
        <View>
            <TextInput style={styles.textInput} placeholder={placeholder} {...otherProps} />
        </View>
    )
}
const styles = StyleSheet.create({
    textInput: {
        color: colors.medium,
        fontSize: 18,
        width:'100%',
        borderRadius: 25,
        padding: 15,
        backgroundColor: colors.light,
        marginVertical: 10,
    }
})
export default AppTextInput;