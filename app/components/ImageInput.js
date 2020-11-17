import React, {useState, useEffect} from 'react'
import {View, StyleSheet, Image, TouchableWithoutFeedback, Alert} from 'react-native'
import colors from '../config/colors'
import * as ImagePicker from 'expo-image-picker'
import {MaterialCommunityIcons} from '@expo/vector-icons'
const ImageInput = ({imageUris}) => {
    
    const requestPermission = async() => {
        try {
            const result = await ImagePicker.requestCameraRollPermissionsAsync()
            // console.log(result)
            if(!result.granted){
                alert('If want to post your pet to the app you need to allow permission')
            }
        } catch (err) {
            console.log(err)
        }
    }
    useEffect(() => {
        requestPermission()
    }, [])  
    const handlePress = async() => {
        if(!imageUris) selectImage()
        else Alert.alert('Delete', 'Are you sure you want to delete this image', [
            {text: 'Yes', onPress: () => {}}
        ])
    }
    const selectImage = async() => {
        const result = await ImagePicker.launchImageLibraryAsync({
            mediaTypes: ImagePicker.MediaTypeOptions.images,
            quality: 0.5
        })
        setImageUri(result.uri)
    }
    return(
        <TouchableWithoutFeedback onPress={handlePress}>
        <View style={styles.container}>
            {!imageUris && <MaterialCommunityIcons color={colors.medium} name="camera" size={40}/>}
            {imageUris && <Image source={{uri: imageUris}} style={styles.image}/>}
        </View>
        </TouchableWithoutFeedback>
    )
}
const styles = StyleSheet.create({
    container: {
        backgroundColor: colors.light,
        borderRadius: 15, 
        justifyContent: 'center',
        alignItems: "center",
        height: 100,
        width: 100,
        overflow: "hidden"
    },
    image:{
        backgroundColor: colors.light,
        borderRadius: 15, 
        height: 100,
        width: 100
    }
})
export default ImageInput;