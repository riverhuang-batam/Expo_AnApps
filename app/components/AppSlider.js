import React from "react";
import { View, StyleSheet } from "react-native";
import Carousel from "react-native-snap-carousel";
import { SliderBox } from "react-native-image-slider-box";
const AppSlider = ({ images }) => {
  // console.log(images);
  return (
    <SliderBox
      images={images}
      resizeMethod={'resize'}
    resizeMode={'cover'}
    onCurrentImagePressed={(index) => console.log(index)}
    />
  );
};
const styles = StyleSheet.create({
  carousel: {},
});
export default AppSlider;
