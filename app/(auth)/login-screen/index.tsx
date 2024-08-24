import {
  View,
  Text,
  TouchableOpacity,
  KeyboardAvoidingView,
  ScrollView,
  Platform,
} from "react-native";
import React, { useEffect } from "react";
import Ionicons from "@expo/vector-icons/Ionicons";
import { CustomButton } from "@/components/custom-components/CustomButton";
import CustomInput from "@/components/custom-components/CustomInput";
import { Controller, useForm } from "react-hook-form";
import { useLoginApi } from "@/api_services/mutations";
import { useAuthStore } from "@/stores/authStore";

type Props = {
  closeSheet: () => void;
};
type formData = {
  URL: string;
  email: string;
  password: string;
  onPress: () => void;
};

const LoginScreen = ({ closeSheet }: Props) => {
  const { control, handleSubmit, formState } = useForm<formData>();
  const userLogin = useAuthStore((state) => state.userLogin);

  const loginUse = useLoginApi(userLogin);

  console.log(loginUse?.data)

  // useEffect(()=>{
  //   if(loginUse?.data){
  //     userLogin(data)
  //   }
  // },[])

  const onSubmit = (data: formData) => {
    console.log(data, "input%%");
    loginUse.mutate({
      usr: data?.email,
      pwd: data?.password,
    });
  };
  return (
  
      <ScrollView
        contentContainerStyle={{ flexGrow: 1 }}
        keyboardShouldPersistTaps="handled"
      >
        <View className="flex-1 bg-white p-5">
          <TouchableOpacity
            className="flex-row items-center"
            onPress={() => {
              closeSheet();
            }}
          >
            <Ionicons name="chevron-back" size={20} color="#4561DB" />
            <Text className="text-[#4561DB] font-[SFPro]">Cancel</Text>
          </TouchableOpacity>
          <View className="flex-1">
            <Text className="text-3xl font-semibold font-[SFPro] my-2">
              Login
            </Text>
            <Text className="font-[SFPro] text-[#757281] my-2">
              Please enter your First, Last name and your phone number in order
              to register
            </Text>
            <View className="my-8">
              <Controller
                control={control}
                name="URL"
                rules={{
                  required: "URL is required",
                }}
                render={({
                  field: { value, onChange, onBlur },
                  fieldState: { error },
                }) => (
                  <CustomInput
                    primary
                    label="URL"
                    placeholder="URL"
                    value={value}
                    onChangeText={onChange}
                    error={error?.message}
                  />
                )}
              />

              <View className="my-5">
                <Controller
                  control={control}
                  name="email"
                  rules={{
                    required: "Email is required",
                  }}
                  render={({
                    field: { value, onChange, onBlur },
                    fieldState: { error },
                  }) => (
                    <CustomInput
                      primary
                      label="Username/Email"
                      placeholder="Username/Email"
                      value={value}
                      onChangeText={onChange}
                      error={error?.message}
                    />
                  )}
                />
              </View>
              <Controller
                control={control}
                name="password"
                rules={{
                  required: "Password is required",
                  minLength: {
                    value: 6,
                    message: "Passowrd should be 6 characters",
                  },
                }}
                render={({
                  field: { value, onChange, onBlur },
                  fieldState: { error },
                }) => (
                  <CustomInput
                    primary
                    label="Password"
                    placeholder="Password"
                    secureTextEntry
                    value={value}
                    onChangeText={onChange}
                    error={error?.message}
                  />
                )}
              />
            </View>
          </View>
          <View>
            <CustomButton
              primary
              title={loginUse.isPending ? "Loading..." : "Login"}
              onPress={handleSubmit(onSubmit)}
            />
          </View>
        </View>
      </ScrollView>
  );
};

export default LoginScreen;
