import React, { useState } from "react";
import { View, Text, TouchableOpacity } from "react-native";



const FilterSheet = ({ closeSheet }: any) => {
  const [selectedFilters, setSelectedFilters] = useState<string[]>([]);

  const toggleFilter = (option: string) => {
    setSelectedFilters((prevFilters) =>
      prevFilters.includes(option)
        ? prevFilters.filter((filter) => filter !== option)
        : [...prevFilters, option]
    );
  };


  const filterOptions = [
    "Received",
    "Putaway",
    "Delivered",
    "Canceled",
    "Rejected",
    "Lost",
    "On Hold",
  ];

  return (
    <View className="bg-white rounded-t-3xl p-4">
      <View className="flex-row justify-between mb-4">
        <TouchableOpacity onPress={closeSheet}>
          <Text className="text-blue-500">Cancel</Text>
        </TouchableOpacity>
        <Text className="font-bold">Filters</Text>
        <TouchableOpacity onPress={closeSheet}>
          <Text className="text-blue-500">Done</Text>
        </TouchableOpacity>
      </View>

      <Text className="text-gray-500 mb-2">SHIPMENT STATUS</Text>

      <View className="flex-row flex-wrap">
        {filterOptions.map((option, index) => (
          <TouchableOpacity
            key={index}
            className={`rounded-full px-4 py-2 m-1 ${
              selectedFilters.includes(option)
                ? "bg-blue-500 text-white"
                : "bg-gray-100"
            }`}
            onPress={() => toggleFilter(option)}
          >
            <Text
              className={`${
                selectedFilters.includes(option) ? "text-white" : ""
              }`}
            >
              {option}
            </Text>
          </TouchableOpacity>
        ))}
      </View>
    </View>
  );
};

export default FilterSheet;
