

import axiosInstance from "@/utilis/axiosInstance";

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

export interface LoginFormData {
  usr: string;
  pwd: string;
}

export const loginApi = async (data: LoginFormData) => {
  try {
    const res = await axiosInstance.post("/login", data);
    const result = res.data;
    return result;
  } catch (error) {
    console.error("loginApi:", error);
    throw error;
  }
};



export const getShipment = async () => {
  try {
    const res = await axiosInstance.get("/frappe.client.get_list", {
      params: {
        doctype: "AWB",
        fields: "*"
      },
    });
    const result = res.data;
    return result;
  } catch (error) {
    console.error("getShipment:", error);
    throw error;
  }
};

