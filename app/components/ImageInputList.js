import React from 'react'
import {View, StyleSheet} from 'react-native';
import ImageInput from './ImageInput'
const ImageInputList = ({imageUris = [], onRemoveImage, onAddImage}) => {
    return(    
    <View style={styles.container}>
        {imageUris.map((uri, index) => (
            <View key={index} style={styles.image} >
                <ImageInput imageUri={uri} onChangeImage={(uri) => onRemoveImage(uri)}/>
            </View>
        ))}
        <ImageInput onChangeImage={(uri) => onAddImage(uri)}/>
    </View>
    )
}
const styles = StyleSheet.create({
    container: {
        flexDirection: 'row'
    },
    image:{
        marginRight:10
    }
})
export default ImageInputList;