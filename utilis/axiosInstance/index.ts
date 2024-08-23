

// Import axios and AsyncStorage
import axios, { AxiosInstance, AxiosRequestConfig, AxiosResponse } from "axios";
import AsyncStorage from "@react-native-async-storage/async-storage";
// import { navigate } from "../../navigtions/RootNavigation";


// Define the interface for the navigation params
interface NavigationParams {
  screen: string;
  tokenExpired: boolean;
}

// Define the API base URL
const ROOT_URL = "https://shippex-demo.bc.brandimic.com/api/method";

// Create an axios instance
const axiosInstance: AxiosInstance = axios.create({
  baseURL: ROOT_URL,
  // withCredentials: true,
});


axiosInstance.interceptors.request.use(
  async (config) => {
    // Get the access token from AsyncStorage
    const token: string | null = await AsyncStorage.getItem("token");

    // If the access token exists, add it to the Authorization header
    if (token) {
      config.headers["Authorization"] = `Bearer ${token}`;
    }
    console.log(token, "token")

    // Return the modified config
    return config;
  },
  (error: any) => Promise.reject(error)
);




export default axiosInstance;

