import React from 'react'
import {View, StyleSheet, Image, TouchableWithoutFeedback} from 'react-native'
import AppText from './AppText'
import colors from '../config/colors'
import AppCarousel from './AppCarousel'
import AppSlider from './AppSlider'
const AppCard = ({title, subTitle, price, imageUrl, onPress}) => {
    const imageArray = imageUrl.map(images => images.path)
    // console.log(imageUrl)
    return(
        <TouchableWithoutFeedback onPress={onPress}>
        <View style={styles.card}>
            
                    <Image style={styles.image} source={{uri:`${imageUrl[0].path}`}}/>
            
            {/* <AppSlider images={imageArray}/> */}
            {/* <Image source={require(`${imageUrl}`)}/> */}
            <AppText style={styles.title}>{title}</AppText>
            <AppText>{price}</AppText>
        </View>
        </TouchableWithoutFeedback>
    )
}
const styles = StyleSheet.create({
    card: {
        borderRadius: 15,
        backgroundColor: colors.white,
        marginBottom: 20,
        padding: 15
    },
    image: {
        width: '100%',
        height: 200
    },
    title: {
        fontSize: 18
    }
})
export default AppCard;