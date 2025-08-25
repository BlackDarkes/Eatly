/* eslint-disable @typescript-eslint/no-unused-vars */
import { baseApi } from "@shared/api";
import { create } from "zustand";
import { devtools } from "zustand/middleware";

interface IStore {
  user: { id: number; email: string; fullname: string; avatar: string } | null;
  isAuthenticated: boolean;
  setUser: (user: IStore['user']) => void;
  type: "login" | "register" | "forgetPassword" | null;
  handleType: (type: "login" | "register" | "forgetPassword" | null) => void;
  isLoading: boolean;
  favouritesShop: string[],
  favouritesDishes: string[],
  checkAuth: () => Promise<void>;
  logout: () => Promise<void>;
  clearAuth: () => void;
  changeFavouritesShop: (favourit: string) => void;
  changeFavouritesDishes: (dish: string) => void;
}

export const useStore = create<IStore>()(
  devtools((set) => ({
    user: null,
    isAuthenticated: false,
    type: null,
    isLoading: true,
    favouritesShop: JSON.parse(localStorage.getItem("favouritesShop")!) || [],
    favouritesDishes: JSON.parse(localStorage.getItem("favouritesDishes")!) || [],

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
    }),

    changeFavouritesShop: (favourit: string) => {
      set((state) => {
        let currentFavorites = [...state.favouritesShop];

        if (currentFavorites.includes(favourit)) {
          currentFavorites = currentFavorites.filter((favorite) => favorite !== favourit);
        } else {
          currentFavorites.push(favourit);
        }

        state.favouritesShop = currentFavorites;
        localStorage.setItem("favouritesShop", JSON.stringify(currentFavorites));
        
        return { }
      })
    },

    changeFavouritesDishes: (dish: string) => {
      set((state) => {
        let currentFavorites = [...state.favouritesDishes];

        if (currentFavorites.includes(dish)) {
          currentFavorites = currentFavorites.filter((dishes) => dishes !== dish);
        } else {
          currentFavorites.push(dish);
        }

        state.favouritesDishes= currentFavorites;
        localStorage.setItem("favouritesDishes", JSON.stringify(currentFavorites));
        
        return { }
      })
    }
  }))
)