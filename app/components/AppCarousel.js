import React from 'react'
import {View, StyleSheet} from 'react-native'
import Carousel from 'react-native-snap-carousel'

const AppCarousel = ({image}) => {
    return(
        <Carousel
                ref={(c) => { this._carousel = c; }}
              data={this.state.entries}
              renderItem={this._renderItem}
              sliderWidth={sliderWidth}
              itemWidth={itemWidth}
        />
    )
}
const styles = StyleSheet.create({
    carousel: {

    }
})
export default AppCarousel;