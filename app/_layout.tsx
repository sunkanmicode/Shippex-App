import { useFonts } from 'expo-font';
import { router, Stack } from 'expo-router';
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import * as SplashScreen from 'expo-splash-screen';
import React, { useEffect } from 'react';
import 'react-native-reanimated';
import { StatusBar } from 'expo-status-bar';
import { SafeAreaProvider, SafeAreaView } from "react-native-safe-area-context";



// Prevent the splash screen from auto-hiding before asset loading is complete.
SplashScreen.preventAutoHideAsync();

export default function RootLayout() {
const queryClient = new QueryClient();
const [isLoggedIn, setIsLoggedIn] = React.useState(false)

  const [loaded] = useFonts({
    SpaceMono: require("../assets/fonts/SpaceMono-Regular.ttf"),
    SFPro: require("../assets/fonts/SFProText-Regular.ttf"),
  });

  useEffect(() => {
    if (loaded) {
      SplashScreen.hideAsync();
    }
    // if (isLoggedIn) {
    //   router.replace("/(tabs)");
    // }
  }, [loaded, isLoggedIn]);

  //  useEffect(() => {
  //    const prepareApp = async () => {
  //      if (loaded) {
  //        await SplashScreen.hideAsync();
  //        if (isLoggedIn) {
  //          router.replace("/(tabs)");
  //        }
  //      }
  //    };

  //    prepareApp();
  //  }, [loaded, isLoggedIn]);

  if (!loaded) {
    return null;
  }

  return (
    <QueryClientProvider client={queryClient}>
      <SafeAreaView className=" flex-1">
        <Stack>
          <Stack.Screen name="(tabs)" options={{ headerShown: false }} />
          <Stack.Screen name="(auth)" options={{ headerShown: false }} />
          <StatusBar style="auto" />
        </Stack>
      </SafeAreaView>
    </QueryClientProvider>
  );
}
