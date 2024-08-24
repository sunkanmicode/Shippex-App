import { useFonts } from "expo-font";
import { router, Stack } from "expo-router";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import * as SplashScreen from "expo-splash-screen";
import React, { useEffect } from "react";
import "react-native-reanimated";
import { StatusBar } from "expo-status-bar";
import { SafeAreaProvider, SafeAreaView } from "react-native-safe-area-context";
import AminationComp from "@/components/AminationComp";
import { toastConfig } from "@/components/custom-components/CustomToast";
import Toast from "react-native-toast-message";
import { useAuthStore } from "@/stores/authStore";

// Prevent the splash screen from auto-hiding before asset loading is complete.
// SplashScreen.preventAutoHideAsync();

export default function RootLayout() {
  const queryClient = new QueryClient();
   const isLoggedIn = useAuthStore((state) => state.isLoggedIn);
  const [appReady, setAppReady] = React.useState(false);
  const [splashOnAnimationFinish, setSplashOnAnimationFinish] =
    React.useState(false);

  const [loaded] = useFonts({
    SpaceMono: require("../assets/fonts/SpaceMono-Regular.ttf"),
    SFPro: require("../assets/fonts/SFProText-Regular.ttf"),
  });

  useEffect(() => {
    if (loaded) {
      // SplashScreen.hideAsync();
      setAppReady(true);
    }
  }, [loaded, isLoggedIn]);

   useEffect(() => {
     if (isLoggedIn && appReady) {
       router.replace("/(tabs)");
     }
   }, [isLoggedIn]);

  if (!appReady || !splashOnAnimationFinish) {
    return (
      <AminationComp
        onAnimationFinish={(isCancelled) => {
          if (!isCancelled) {
            setSplashOnAnimationFinish(true);
          }
        }}
      />
    );
  }

  // if (!loaded) {
  //   return null;
  // }

  return (
    <QueryClientProvider client={queryClient}>
      <SafeAreaView className=" flex-1">
        <Stack>
          <Stack.Screen name="(auth)" options={{ headerShown: false }} />
          <Stack.Screen name="(tabs)" options={{ headerShown: false }} />
        </Stack>
        <Toast config={toastConfig} />
        <StatusBar style="auto" />
      </SafeAreaView>
    </QueryClientProvider>
  );
}
