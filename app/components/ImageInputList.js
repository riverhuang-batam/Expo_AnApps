import React, {useRef} from 'react'
import {View, StyleSheet, ScrollView} from 'react-native';
import ImageInput from './ImageInput'
const ImageInputList = ({imageUris = [], onRemoveImage, onAddImage}) => {
    const scrollViewRef = useRef()
    return(    
        
    <View style={styles.container}>
        <ScrollView
        horizontal
        ref={scrollViewRef}
        onContentSizeChange={() => scrollViewRef.current.scrollToEnd()}
        >
        {imageUris.map((uri, index) => (
            <View key={index} style={styles.image} >
                <ImageInput imageUri={uri} onChangeImage={(uri) => onRemoveImage(uri)}/>
            </View>
        ))}
        <ImageInput onChangeImage={(uri) => onAddImage(uri)}/>
        </ScrollView>    
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