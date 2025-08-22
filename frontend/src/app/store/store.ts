/* eslint-disable @typescript-eslint/no-unused-vars */
import { baseApi } from "@shared/api";
import { create } from "zustand";
import { devtools } from "zustand/middleware";

interface IStore {
  user: { id: number; email: string; fullname: string; avatar: string } | null;
  isAuthenticated: boolean;
  setUser: (user: IStore['user']) => void;
  type: "login" | "register" | "forgetPassword" | null;
  handleType: (type: "login" | "register" | "forgetPassword") => void;
  isLoading: boolean;
  checkAuth: () => Promise<void>;
  logout: () => Promise<void>;
  clearAuth: () => void;
}

export const useStore = create<IStore>()(
  devtools((set) => ({
    user: null,
    isAuthenticated: false,
    type: null,
    isLoading: true,

    setUser: (user) => set({
      user,
      isAuthenticated: !!user,
    }),
    
    handleType: (type: "login" | "register") => set({ type }),

    checkAuth: async () => {
      try {
        const response = await baseApi.get(
          `/auth/me`,
          {
            withCredentials: true,
          }
        );

        set({
          user: response.data,
          isAuthenticated: true,
          isLoading: false,
        })
      } catch(error) {
        set({
          user: null,
          isAuthenticated: false,
          isLoading: false,
        });
      }
    },

    logout: async () => {
      try {
        await baseApi.post(
          `/auth/logout`,
          {
            withCredentials: true,
          }
        )
      } catch(error) {
        set({
          user: null,
          isAuthenticated: false,
          isLoading: false,
        })
      }
    },

    clearAuth: () => set({
      user: null,
      isAuthenticated: false,
      isLoading: false,
    })
  }))
)