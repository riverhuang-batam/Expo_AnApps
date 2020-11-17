import React, {useState, useEffect} from 'react'
import {View, StyleSheet} from 'react-native'
import AppButton from '../components/AppButton'
import AppTextInput from '../components/AppTextInput'
import Screens from '../components/Screens'
import ImageInput from '../components/ImageInput'
import ImageInputList from '../components/ImageInputList'
import * as ImagePicker from 'expo-image-picker'
import { TouchableWithoutFeedback } from 'react-native-gesture-handler'
const AddPetScreen = () => {
    const [imageUris, setImageUris] = useState([])
    
    const onRemoveImage = uri => {
        imageUris.filter(uri => uri !== uri)
    }
   const onAddImage = () => {
       
   }
    return(
        <Screens>
            
            <ImageInputList imageUris={imageUris}/>
            
            <AppTextInput placeholder="Pet Name" />
            <AppTextInput placeholder="Description" />
            <AppTextInput placeholder="Price" />
            <AppTextInput placeholder="Location"/>
            <AppButton>Post</AppButton>
        </Screens>
    )
}

export default AddPetScreen;