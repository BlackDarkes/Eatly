/* eslint-disable @typescript-eslint/no-unused-vars */
import { baseApi } from "@shared/api";
import { create } from "zustand";
import { devtools } from "zustand/middleware";

interface IStore {
  user: { id: number; email: string; fullname: string; avatar: string } | null;
  isAuthenticated: boolean;
  setUser: (user: IStore['user']) => void;

  type: "login" | "register" | "forgetPassword" | null;
  isLoading: boolean;
  handleType: (type: "login" | "register" | "forgetPassword" | null) => void;
  checkAuth: () => Promise<void>;
  logout: () => Promise<void>;
  clearAuth: () => void;

  favouritesShop: string[],
  changeFavouritesShop: (favourit: string) => void;

  favouritesDishes: string[],
  changeFavouritesDishes: (dish: string) => void;

  cart: string[],
  changeCart: (dish: string) => void;
}

export const useStore = create<IStore>()(
  devtools((set) => ({
    user: null,
    isAuthenticated: false,
    type: null,
    isLoading: true,
    favouritesShop: JSON.parse(localStorage.getItem("favouritesShop")!) || [],
    favouritesDishes: JSON.parse(localStorage.getItem("favouritesDishes")!) || [],
    cart: JSON.parse(localStorage.getItem("cart")!) || [],

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
        let currentFavorites: string[] = [...state.favouritesShop];

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
        let currentFavorites: string[] = [...state.favouritesDishes];

        if (currentFavorites.includes(dish)) {
          currentFavorites = currentFavorites.filter((dishes) => dishes !== dish);
        } else {
          currentFavorites.push(dish);
        }

        state.favouritesDishes= currentFavorites;
        localStorage.setItem("favouritesDishes", JSON.stringify(currentFavorites));
        
        return { }
      })
    },

    changeCart: (dish: string) => {
      set((state) => {
        let currentCart: string[] = [...state.cart];

        if (currentCart.includes(dish)) {
          currentCart = currentCart.filter((product) => product !== dish);
        } else {
          currentCart.push(dish);
        }

        state.cart = currentCart;
        localStorage.setItem("cart", JSON.stringify(currentCart));

        return { };
      })
    }
  }))
)