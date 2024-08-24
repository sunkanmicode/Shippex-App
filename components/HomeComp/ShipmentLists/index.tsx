
import React, { useState, useCallback } from "react";
import {
  View,
  Text,
  Image,
  TouchableOpacity,
  FlatList,
  RefreshControl,
} from "react-native";
import { AntDesign } from "@expo/vector-icons";
import Checkbox from "expo-checkbox";
import { useGetShipment } from "@/api_services/queris";
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from "react-native-responsive-screen";
import CustomBottomSheet from "@/components/custom-components/CustomBottomSheet";
import FilterSheet from "../FilterSheet";

const ShipmentLists = () => {
  const [isChecked, setChecked] = useState(false);
  const [refreshing, setRefreshing] = useState(false);
  const getShipmentList = useGetShipment();

 

  const primarystatus = [
    "Received",
    "Cancelled",
    "Putaway",
    "Delivered",
    "Rejected",
    "Lost",
    "Hold on",
  ];

  if (Array.isArray(getShipmentList?.data?.message)) {
    getShipmentList.data.message = getShipmentList.data.message.map(
      (shipment: any) => {
        const randomIndex = Math.floor(Math.random() * primarystatus.length);
        return {
          ...shipment,
          primaryStatus: primarystatus[randomIndex],
        };
      }
    );
  }

  const onRefresh = useCallback(() => {
    setRefreshing(true);
    getShipmentList.refetch().finally(() => setRefreshing(false));
  }, []);

  return (
    <>
      <View>
        <FlatList
          data={getShipmentList?.data?.message}
          keyExtractor={(item, index) => index.toString()}
          renderItem={({ item }) => (
            <View className="h-16 bg-[#F4F2F8] rounded-lg flex-row p-2 my-2 items-center">
              <View className="flex-1">
                <Checkbox
                  className="border border-blue-600 bg-white"
                  value={isChecked}
                  onValueChange={setChecked}
                  color={isChecked ? "#2F50C1" : undefined}
                />
              </View>
              <View className="flex-1">
                <View className="w-10 h-10 flex-1">
                  <Image
                    source={require("../../../assets/images/box1.png")}
                    className="w-full h-full"
                  />
                </View>
              </View>
              <View className="flex-[2]">
                <View>
                  <Text className="font-[SFPro] text-xs">{item?.currency}</Text>
                  <Text className="font-[SFPro] font-bold text-sm">
                    {item?.name}
                  </Text>
                  <View className="flex-row items-center">
                    <Text className="font-[SFPro] text-[10px]">
                      {item?.origin_city}
                    </Text>
                    <AntDesign name="arrowright" size={10} color="black" />
                    <Text className="font-[SFPro] text-[9px]">
                      {item?.destination_city}
                    </Text>
                  </View>
                </View>
              </View>
              {item?.primaryStatus === "Received" && (
                <View className="flex-[2] h-6 bg-[#D9E6FD] items-center justify-center mx-2">
                  <Text className="font-[SFPro] text-xs text-[#2F50C1]">
                    {item?.primaryStatus}
                  </Text>
                </View>
              )}
              {item?.primaryStatus === "Delivered" && (
                <View className="flex-[2] h-6 bg-green-100 items-center justify-center mx-2">
                  <Text className="font-[SFPro] text-xs text-green-600">
                    {item?.primaryStatus}
                  </Text>
                </View>
              )}
              {item?.primaryStatus === "Rejected" && (
                <View className="flex-[2] h-6 bg-red-100 items-center justify-center mx-2">
                  <Text className="font-[SFPro] text-xs text-red-500">
                    {item?.primaryStatus}
                  </Text>
                </View>
              )}
              {item?.primaryStatus !== "Rejected" &&
                item?.primaryStatus !== "Received" &&
                item?.primaryStatus !== "Delivered" && (
                  <View className="flex-[2] h-6 bg-[#D9E6FD] items-center justify-center mx-2">
                    <Text className="font-[SFPro] text-xs">
                      {item?.primaryStatus}
                    </Text>
                  </View>
                )}
              <View className="flex-[.5]">
                <View className="w-6 h-6 bg-white rounded-full items-center justify-center">
                  <AntDesign name="arrowsalt" size={15} color="black" />
                </View>
              </View>
            </View>
          )}
          refreshControl={
            <RefreshControl refreshing={refreshing} onRefresh={onRefresh} />
          }
        />
      </View>
    
    </>
  );
};

export default ShipmentLists;
