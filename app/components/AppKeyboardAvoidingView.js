import React from 'react'
import {KeyboardAvoidingView} from 'react-native'

const AppKeyboardAvoidingView = ({children, AvoidingMarginTop}) => {
    return(
        <KeyboardAvoidingView behavior='position'
        keyboardVerticalOffset={Platform.OS ===' ios' ? 0 : AvoidingMarginTop}>
            {children}
        </KeyboardAvoidingView>
    )
}
export default AppKeyboardAvoidingView;