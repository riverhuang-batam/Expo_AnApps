import React, {useState, useEffect} from 'react'
import {View, StyleSheet} from 'react-native'
import Formik from 'formik'
import axios from 'axios'
import {SERVER_URI} from 'react-native-dotenv'
import AppButton from '../components/AppButton'
import AppTextInput from '../components/AppTextInput'
import Screens from '../components/Screens'
import ImageInputList from '../components/ImageInputList'
import ImageInput from '../components/ImageInput'
import { TouchableWithoutFeedback } from 'react-native-gesture-handler'
const AddPetScreen = () => {
    const [imageUris, setImageUris] = useState([])
    
    const postPet = () => {
        axios.post(`${SERVER_URI}pet`, {})
        .then(() => console.log(imageUris))
        .catch(err => console.log(err))
    }

    const onRemoveImage = uri => {
        setImageUris(imageUris.filter(imageUri => imageUri !== uri))
    }
   const onAddImage = (uri) => {
       setImageUris(currentImage => [...currentImage, uri])
   }
   useEffect(() => {
       console.log(imageUris)
   },[imageUris])
    return(
        <Screens>
            <ImageInputList imageUris={imageUris} onAddImage={onAddImage} onRemoveImage={onRemoveImage}/>
            <AppTextInput placeholder="Pet Name" />
            <AppTextInput placeholder="Description" />
            <AppTextInput placeholder="Price" />
            <AppTextInput placeholder="Location"/>
            <AppButton onPress={() => postPet(imageUris)}>Post</AppButton>
        </Screens>
    )
}

export default AddPetScreen;