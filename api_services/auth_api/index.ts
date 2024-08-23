// import AsyncStorage from "@react-native-async-storage/async-storage";
// import axiosInstance from "../../utilis/axiosInstance";

// export interface GenerateOtpData {
//   phone_number: string;
// }
// export interface VerifyOtpData {
//   opt: string;
// }

// export interface registerUserData {
//   full_name: string;
//   email: string;
//   password: string;
//   password_confirmation: string;
//   phone_number: string;
//   country: string;
// }

// export interface LoginFormData {
//   email: string;
//   password: string;
// }

// export const getGenerateOpt = async (data: GenerateOtpData) => {
//   try {
//     const res = await axiosInstance.post("/auth/generate/otp", data);
//     const result = res.data;
//     return result;
//   } catch (error) {
//     console.error("Error generate otp :", error);
//     throw error;
//   }
// };

// export const VerifyOpt = async (data: VerifyOtpData) => {
//   // console.log(data, "HHHHH")
//   const payload = {
//     otp: data,
//   };

//   try {
//     const res = await axiosInstance.post("/auth/verify/otp", payload);
//     const result = res.data;
//     return result;
//   } catch (error) {
//     console.error("Error VerifyOpt :", error);
//     throw error;
//   }
// };

// export const rendOpt = async (data: any) => {
//   console.log(data, "rendOptHHHHH");
//   try {
//     const res = await axiosInstance.get("/auth/resend/otp", {
//       params: {
//         phone_number: data,
//       },
//     });
//     const result = res.data;
//     return result;
//   } catch (error) {
//     console.error("Error VerifyOpt :", error);
//     throw error;
//   }
// };

// export const registerUser = async (data: registerUserData) => {
//   const requestedPayload = {
//     full_name: data?.full_name,
//     email: data?.email,
//     password: data?.password,
//     password_confirmation: data?.password_confirmation,
//     phone_number: data?.phone_number,
//     country: data?.country,
//   };
//   // console.log(requestedPayload, "Register(((")
//   try {
//     const res = await axiosInstance.post(
//       "/auth/register/user",
//       requestedPayload
//     );
//     const result = res.data;
//     return result;
//   } catch (error) {
//     console.error("Error registerUser :", error);
//     throw error;
//   }
// };

// // LOGIN USER
// export const loginUser = async (data: LoginFormData) => {
//   // console.log(data, "9999999")
//   try {
//     const res = await axiosInstance.post("/auth/authenticate/user", data);
//     const result = res.data;
//     AsyncStorage.setItem("token", result.data.access_token);

//     return result;
//   } catch (error) {
//     console.error("Error login user:", error);
//     throw error;
//   }
// };

// // forgot password
// export const forgotPassword = async (data: any) => {
//   try {
//     const res = await axiosInstance.post("/auth/forgot/password", data);
//     const result = res.data;

//     return result;
//   } catch (error) {
//     console.error("Error forgot Password user:", error);
//     throw error;
//   }
// };

// // CHANGE PASSWORD
// export const changePassword = async (data: any) => {
//   // console.log(data, "888000")
//   const payload = {
//     email: data?.email,
//     token: data?.token,
//     password: data?.password,
//     password_confirmation: data?.confirm_password,
//   };
//   try {
//     const res = await axiosInstance.post("/auth/reset/password", payload);
//     const result = res.data;
//     return result;
//   } catch (error) {
//     console.error("Error changePassword user:", error);
//     throw error;
//   }
// };
