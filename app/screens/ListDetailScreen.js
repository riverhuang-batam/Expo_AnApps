import React from 'react'
import {View, StyleSheet} from 'react-native'
import AppText from '../components/AppText'
import AppSlider from '../components/AppSlider'
import colors from '../config/colors'
import ListItem from '../components/lists/ListItem'
import Screens from '../components/Screens'
const ListDetailScreen = ({route}) => {
    const list = route.params
    return(
        <View style={styles.container}>
            <AppSlider images={list.petImages.map(petImage => petImage.path)} />
            <Screens>
            <AppText>{list.petName}</AppText>
            <AppText>{list.price}</AppText>
            <AppText>{list.description}</AppText>
            <ListItem
                title="Mosh"
                subTitle="hamedani"
            />
            </Screens>
        </View>
    )
}
const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: colors.white
    }
})
export default ListDetailScreen;