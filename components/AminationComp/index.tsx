import { View, Text } from 'react-native'
import React from 'react'
import LottieView from "lottie-react-native";

const AminationComp = () => {
    const animation = React.useRef<LottieView>(null);
  return (
    <View className="flex-1 justify-center items-center">
      <LottieView
        autoPlay
        ref={animation}
        style={{
          width: 200,
          height: 200,
          backgroundColor: "#eee",
        }}
        // Find more Lottie files at https://lottiefiles.com/featured
        source={require("../../assets/Flow24.json")}
      />
    </View>
  );
}

export default AminationComp