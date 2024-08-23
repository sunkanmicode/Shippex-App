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
import CustomInput from "@/components/custom-components/CustomInput";
import Checkbox from "expo-checkbox";
import { useState } from "react";
import ShipmentLists from "@/components/HomeComp/ShipmentLists";

export default function HomeScreen() {
  const [isChecked, setChecked] = useState(false);

  return (
    <View className=" bg-white p-4  flex-1 ">
      <View className=" flex-1 ">
        <View className=" flex-row  items-center justify-between mt-5">
          <View className="w-10 h-10">
            <Image
              source={require("../../assets/images/profile.png")}
              className=" w-full h-full"
            />
          </View>
          <View className="w-24 h-4">
            <Image
              source={require("../../assets/images/blueLogo.png")}
              className=" w-full h-full"
            />
          </View>
          <View className="w-10 h-10 bg-[#F4F2F8] items-center justify-center rounded-full">
            <Ionicons name="notifications-outline" size={24} color="#2F50C1" />
          </View>
        </View>
        <View>
          <View className="my-3">
            <Text className="font-[SFPro] text-xs">Hello,</Text>
            <Text className=" text-lg font-semibold font-[SFPro]">
              Ibrabim Shaker
            </Text>
          </View>
          <View>
            <CustomInput
              primary
              placeholder="Search"
              iconPostion="left"
              icon={<EvilIcons name="search" size={24} color="black" />}
            />
            <View className="flex-row flex-1 gap-3 my-1">
              <TouchableOpacity className="w-40 h-11 bg-[#F4F2F8] flex-row items-center justify-center rounded-lg flex-1">
                <Octicons name="filter" size={20} color="black " />
                <Text className="font-[SFPro] text-base mx-3">Filters</Text>
              </TouchableOpacity>

              <TouchableOpacity className="w-40 h-11 bg-[#2F50C1] flex-row items-center justify-center rounded-lg flex-1">
                <MaterialCommunityIcons
                  name="line-scan"
                  size={20}
                  color="white"
                />
                <Text className="font-[SFPro] text-white text-base mx-3">
                  Add Scan
                </Text>
              </TouchableOpacity>
            </View>
          </View>
        </View>
      </View>
      <View className=" flex-[1.5] ">
        <View className=" flex-row  justify-between items-center">
          <Text className="font-[SFPro] text-2xl font-semibold">Shipments</Text>
          <View className="">
            <View className=" flex-row items-center">
              <Checkbox
                // style={styles.checkbox}
                className="border border-blue-600"
                value={isChecked}
                onValueChange={setChecked}
                color={isChecked ? "#2F50C1" : undefined}
              />
              <Text className="text-[#2F50C1] font-[SFPro] mx-2">Mark All</Text>
            </View>
          </View>
        </View>
        <ScrollView>
          <ShipmentLists />
          <ShipmentLists />
          <ShipmentLists />
          <ShipmentLists />
          <ShipmentLists />
          <ShipmentLists />
          <ShipmentLists />
          <ShipmentLists />
          <ShipmentLists />
          <ShipmentLists />
          <ShipmentLists />
        </ScrollView>
      </View>
    </View>
  );
}
