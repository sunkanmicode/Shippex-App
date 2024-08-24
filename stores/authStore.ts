// src/store/authStore.ts
import { create } from "zustand";
import { persist, createJSONStorage } from "zustand/middleware";

interface UserInfo {
  name: null;
}

interface AuthState {
  isLoggedIn: boolean;
  userInfo: UserInfo | null;
  userLogin: (user: UserInfo) => void;
  //   logout: () => void;
}

export const useAuthStore = create<AuthState>()(
  persist(
    (set) => ({
      isLoggedIn: false,
      userInfo: null,
      userLogin: (user) => set({ isLoggedIn: true, userInfo: user }),
    //   logout: () => set({ isLoggedIn: false, userInfo: null }),
    }),
    {
      name: "auth-storage",
      storage: createJSONStorage(() => localStorage), // Use AsyncStorage for React Native
    }
  )
);
