import React from 'react'
import {View, StyleSheet, TouchableHighlight, Image} from 'react-native'

const CartListItem = ({title, image, price, onPress}) => {
    return(
        <>
<TouchableHighlight onPress={onPress} underlayColor={colors.light}>
    <View style={styles.container}>
      {IconComponent}
      {image && <Image style={styles.image} source={image} />}
      <View style={styles.detailsContainer}>
        <AppText style={styles.title}>{title}</AppText>
        {subTitle && <AppText style={styles.subTitle}>{subTitle}</AppText>}
      </View>
    </View>
    </TouchableHighlight>
        </>
    )
}

export default CartListItem;