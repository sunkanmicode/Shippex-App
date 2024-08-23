// import React from "react";
// import {
//   View,
//   Text,
//   TextInput,
//   TouchableOpacity,
//   ActivityIndicator,
//   KeyboardTypeOptions,
// } from "react-native";


// type InputType = {
//   label?: string;
//   name?: string;
//   placeholder?: string;
//   icon?: JSX.Element;
//   iconPostion?: string;
//   value?: string;
//   onChangeText?: () => void;
//   secureTextEntry?: boolean;
//   keyboardType?: string;
//   primary?: boolean;
//   whiteBg?: boolean;
//   width?: number;
//   error?:string;
//   multiline?: boolean;
// };

// const CustomInput = ({
//   label,
//   icon,
//   iconPostion,
//   onChangeText,
//   value,
//   placeholder,
//   secureTextEntry,
//   keyboardType,
//   primary,
//   whiteBg,
//   error,
//   multiline,
// }: // width,
// InputType) => {
//   const [focused, setFocused] = React.useState(false);
//   // const width = 60

//   const getFlexDirection = () => {
//     if (!icon && !iconPostion) {
//       return "flex-row";
//     }
//     if (icon && iconPostion) {
//       if (iconPostion === "left") {
//         return "flex-row";
//       } else {
//         if (iconPostion === "right") {
//           return "flex-row-reverse";
//         }
//       }
//     }
//   };

//   const getBgColor = () => {
//     if (primary) return "bg-[#F4F2F8]";
//     if (whiteBg) return "bg-[#Ffff] border border-[#D3D3D3]";
//   };
//   return (
//     <>
//       <View className="py-1">
//         {label && (
//           <Text className="mb-2 font-[400] text-[12px]  font-[Archivo] leading-[13]">
//             {label}
//           </Text>
//         )}
//         <View
//           className={`h-[50] rounded-lg ${getBgColor()}  items-center px-3 ${getFlexDirection()}`}
//         >
//           <View>{icon && icon}</View>
//           <TextInput
//             secureTextEntry={secureTextEntry}
//             placeholder={placeholder}
//             keyboardType={keyboardType as KeyboardTypeOptions}
//             onBlur={() => {
//               setFocused(false);
//             }}
//             onFocus={() => {
//               setFocused(true);
//             }}
//             onChangeText={onChangeText}
//             value={value}
//             // style={{ backgroundColor: "blue" }}
//             className="flex-1 h-11 px-2 "
//           />
//         </View>
//         {error && (
//           <Text className=" text-red-300 font-[400] text-xs  font-[SwitzerVariable]">
//             {error}
//           </Text>
//         )}
//       </View>
//       {/* {multiline && <Text>Hello</Text>} */}
//     </>
//   );
// };

// export default CustomInput;


import React, { useState, useRef } from "react";
import {
  View,
  Text,
  TextInput,
  Animated,
  StyleSheet,
  KeyboardTypeOptions,
  ViewStyle,
  TextStyle,
} from "react-native";

type InputType = {
  label?: string;
  name?: string;
  placeholder?: string;
  icon?: JSX.Element;
  iconPosition?: string;
  value?: string;
  onChangeText?: (text: string) => void;
  secureTextEntry?: boolean;
  keyboardType?: KeyboardTypeOptions;
  primary?: boolean;
  whiteBg?: boolean;
  error?: string;
};

const CustomInput = ({
  label,
  icon,
  iconPosition,
  onChangeText,
  value: externalValue,
  placeholder,
  secureTextEntry,
  keyboardType,
  primary,
  whiteBg,
  error,
}: InputType) => {
  const [isFocused, setIsFocused] = useState(false);
  const [internalValue, setInternalValue] = useState(externalValue || "");
  const animatedIsFocused = useRef(
    new Animated.Value(externalValue ? 1 : 0)
  ).current;

  const handleFocus = () => setIsFocused(true);
  const handleBlur = () => setIsFocused(false);

  const handleChangeText = (text: string) => {
    setInternalValue(text);
    if (onChangeText) {
      onChangeText(text);
    }
  };

  React.useEffect(() => {
    Animated.timing(animatedIsFocused, {
      toValue: isFocused || internalValue !== "" ? 1 : 0,
      duration: 200,
      useNativeDriver: false,
    }).start();
  }, [isFocused, internalValue]);

  React.useEffect(() => {
    if (externalValue !== undefined) {
      setInternalValue(externalValue);
    }
  }, [externalValue]);

  const labelStyle = {
    position: "absolute" as const,
    left: 10,
    top: animatedIsFocused.interpolate({
      inputRange: [0, 1],
      outputRange: [15, 0],
    }),
    fontSize: animatedIsFocused.interpolate({
      inputRange: [0, 1],
      outputRange: [16, 12],
    }),
    color: animatedIsFocused.interpolate({
      inputRange: [0, 1],
      outputRange: ["#aaa", "#000"],
    }),
    backgroundColor: "transparent" as const,
    zIndex: 1,
  };

  const getBgColor = () => {
    if (primary) return styles.primaryBg;
    if (whiteBg) return styles.whiteBg;
    return {};
  };

  return (
    <View style={styles.container}>
      <View style={[styles.inputContainer, getBgColor()]}>
        <Animated.Text style={labelStyle as Animated.AnimatedProps<TextStyle>}>
          {label}
        </Animated.Text>
        {icon && iconPosition === "left" && <View>{icon}</View>}
        <TextInput
          style={styles.input}
          onFocus={handleFocus}
          onBlur={handleBlur}
          onChangeText={handleChangeText}
          value={internalValue}
          placeholder={isFocused ? placeholder : ""}
          secureTextEntry={secureTextEntry}
          keyboardType={keyboardType}
        />
        {icon && iconPosition === "right" && <View>{icon}</View>}
      </View>
      {error && <Text style={styles.errorText}>{error}</Text>}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    marginVertical: 10,
  },
  inputContainer: {
    flexDirection: "row",
    alignItems: "center",
    borderWidth: 1,
    borderColor: "#ccc",
    borderRadius: 5,
    height: 50,
    paddingHorizontal: 10,
  },
  input: {
    flex: 1,
    fontSize: 16,
    paddingTop: 10,
  },
  primaryBg: {
    backgroundColor: "#F4F2F8",
  },
  whiteBg: {
    backgroundColor: "#FFFFFF",
    borderColor: "#D3D3D3",
  },
  errorText: {
    color: "red",
    fontSize: 12,
    marginTop: 5,
  },
});

export default CustomInput;