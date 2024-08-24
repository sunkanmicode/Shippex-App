
import { View } from "react-native";
import React from "react";
import LottieView from "lottie-react-native";

const AnimationComp = ({
  onAnimationFinish = (isCancelled) => {},
}: {
  onAnimationFinish?: (isCancelled: boolean) => void;
}) => {
  const animation = React.useRef<LottieView>(null);

  return (
    <View style={{ flex: 1 }}>
      <LottieView
        autoPlay
        ref={animation}
        onAnimationFinish={onAnimationFinish}
        loop={false}
        style={{
          flex: 1,
        }}
        resizeMode="cover"
        source={require("../../assets/flow5.json")}
      />
    </View>
  );
};

export default AnimationComp;