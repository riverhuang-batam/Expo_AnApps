import React from 'react'
import {View, StyleSheet} from 'react-native';
import ImageInput from './ImageInput'
const ImageInputList = ({imageUris = [], onRemoveImage, onAddImage}) => {
    return(    
    <View>
        {imageUris.map((uri) => (
            <View key={uri}>
                <ImageInput imageUri={uri} onChangeImage={(uri) => onRemoveImage(uri)}/>
            </View>
        ))}
        <ImageInput onChangeImage={(uri) => onAddImage(uri)}/>
    </View>
    )
}

export default ImageInputList;