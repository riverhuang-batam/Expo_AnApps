import React, { useState } from "react";
import { View, StyleSheet, Modal } from "react-native";
// import * as Progress from "react-native-progress";
import LottieView from "lottie-react-native";
import colors from '../config/colors'
const UploadScreen = ({ onDone, progress = 0, visible = false }) => {
  return (
    <Modal visible={visible}>
      {/* {progress < 1 ? (
        // <Progress.Bar
        //     color={colors.primary}
        //     progress={progress * 100}
        //     width={200}
        // />
        null
      ) : ( */}
        <LottieView
          autoPlay
          onAnimationFinish={onDone}
          source={require("../../assets/success-animation.json")}
          loop={false}
          resizeMode="cover"
        />
      {/* )} */}
    </Modal>
  );
};
const styles = StyleSheet.create({
  animation: {
    width: 150,
  },
});
export default UploadScreen;
