import React from "react";
import {
  View,
  Text,
  TextInput,
  TouchableOpacity,
  ActivityIndicator,
} from "react-native";

type ButtonType = {
  title: string;
  disabled?: boolean;
  loading?: boolean;
  primary?: boolean;
  priWhite?: boolean;
  danger?: boolean;
  whiteBg?: boolean;
  icon?: React.ReactNode;
  iconPostion?: string;
  onPress?: () => void;
  style?: any;
};
export const CustomButton = ({
  title,
  disabled,
  priWhite,
  primary,
  danger,
  loading,
  whiteBg,
  onPress,
  icon,
  iconPostion,
  style,
}: ButtonType) => {


  const getBgColor = () => {
    if (disabled) return "bg-[#EAE7F2] text-[#A7A3B3]";
    if (primary) return "bg-[#2F50C1] text-[#ffffff] font-bold";
    if(priWhite) return "bg-[#FFFFFF] text-[#2F50C1] font-bold";
    if (danger) return "bg-[#FD5042]";
    if (whiteBg) return "bg-white text-black";
  };

  const disabledTextBtn = disabled ? "text-black" : "text-white";
  return (
    <TouchableOpacity
      className={`px-2 h-12  rounded-lg items-center justify-center  mt-1 py-3 ${getBgColor()}`}
      disabled={disabled}
      onPress={onPress}
      style={style}
    >
      <View className={` flex-row `}>
        {/* <View>{icon && icon}</View> */}
        {title && (
          <>
            <Text
              className={`${disabledTextBtn} font-[SFPro] font-semibold ${getBgColor()}`}
            >
              {loading ? <ActivityIndicator /> : title}
            </Text>
          </>
        )}
      </View>
    </TouchableOpacity>
  );
};
