import { Tabs } from 'expo-router';
import React from 'react';

import { TabBarIcon } from '@/components/navigation/TabBarIcon';
import { AntDesign, FontAwesome5, FontAwesome6, MaterialCommunityIcons } from '@expo/vector-icons';


export default function _Layout() {

  return (
    <Tabs
      initialRouteName="index"
      screenOptions={{
        headerShown: false,
      }}
    >
      <Tabs.Screen
        name="index"
        options={{
          title: "Home",
          tabBarIcon: ({ color, focused }) => (
            <FontAwesome5 name="boxes" size={20} color="#2F50C1" />
          ),
        }}
      />
      <Tabs.Screen
        name="scan"
        options={{
          title: "Scan",
          tabBarIcon: ({ color, focused }) => (
            <MaterialCommunityIcons
              name="barcode-scan"
              size={20}
              color="#A7A3B3"
            />
          ),
        }}
      />
      <Tabs.Screen
        name="wallet"
        options={{
          title: "Wallet",
          tabBarIcon: ({ color, focused }) => (
            // <TabBarIcon
            //   name={focused ? "code-slash" : "code-slash-outline"}
            //   color={color}
            // />
            <AntDesign name="wallet" size={24} color="#A7A3B3" />
          ),
        }}
      />
      <Tabs.Screen
        name="profile"
        options={{
          title: "Profile",
          tabBarIcon: ({ color, focused }) => (
            // <TabBarIcon
            //   name={focused ? "code-slash" : "code-slash-outline"}
            //   color={color}
            // />
            <FontAwesome6 name="circle-user" size={20} color="#A7A3B3" />
          ),
        }}
      />
    </Tabs>
  );
}
