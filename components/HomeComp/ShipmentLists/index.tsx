import {
  View,
  StyleSheet,
  Platform,
  Text,
  Image,
  TouchableOpacity,
  ScrollView,
} from "react-native";
import {
  Ionicons,
  EvilIcons,
  Octicons,
  MaterialCommunityIcons,
  AntDesign,
} from "@expo/vector-icons";
import Checkbox from "expo-checkbox";
import { useState } from "react";

const ShipmentLists = () => {
  const [isChecked, setChecked] = useState(false);

  return (
    <View className="flex-1 my-2">
      <View className="h-16 bg-[#F4F2F8] rounded-lg flex-row p-2  items-center">
        <View className=" flex-1">
          <Checkbox
            // style={styles.checkbox}
            className="border border-blue-600 bg-white"
            value={isChecked}
            onValueChange={setChecked}
            color={isChecked ? "#2F50C1" : undefined}
          />
        </View>
        <View className="flex-1">
          <View className="w-10 h-10 flex-1 ">
            <Image
              source={require("../../../assets/images/box1.png")}
              className="w-full h-full"
            />
          </View>
        </View>
        <View className="flex-[1.5]">
          <View>
            <Text className="font-[SFPro] text-xs">AWB</Text>
            <Text className="font-[SFPro] font-bold text-sm">1234567890</Text>
            <View className=" flex-row items-center">
              <Text className="font-[SFPro] text-[10px]">caro</Text>
              <AntDesign name="arrowright" size={10} color="black" />
              <Text className="font-[SFPro] text-[9px]">AWB jaskak</Text>
            </View>
          </View>
        </View>
        <View className=" flex-[1.5] h-6 bg-[#D9E6FD] items-center justify-center mx-2">
          <Text className="font-[SFPro] text-xs">RECVIED</Text>
        </View>
        <View className=" flex-[.5] ">
          <View className="w-6 h-6 bg-white rounded-full items-center justify-center">
            <AntDesign name="arrowsalt" size={15} color="black" />
          </View>
        </View>
      </View>
    </View>
  );
};

export default ShipmentLists;
