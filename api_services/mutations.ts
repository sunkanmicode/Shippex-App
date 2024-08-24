import { useMutation } from "@tanstack/react-query";
import { loginApi } from ".";
import Toast from "react-native-toast-message";
import { router } from "expo-router";



export const useLoginApi = (userLogin:any) => {
  //   const queryClient = useQueryClient();
  return useMutation({
    mutationFn: loginApi,
    onSuccess(data: any) {
      console.log(data);
      userLogin(data)
      Toast.show({
        type: "success",
        text2: `Successfull`,
      });
      router.push("/(tabs)");
    },
    onError(error: any) {
      console.log(error);
      Toast.show({
        type: "error",
        text2: "Something went wrong",
      });
    },
  });
};

