
import { Stack } from "expo-router";
import { StatusBar } from "expo-status-bar";

const _layout = () => {
  return (
    <>
      <Stack
        // initialRouteName="index"
        screenOptions={{ headerShown: false }}
      />
      <StatusBar style="dark" />
    </>
  );
}

export default _layout