import { create } from "zustand";
import { devtools } from "zustand/middleware";

interface IStore {
  user: { id: number; email: string; fullname: string; avatar: string } | null;
  isAuthenticated: boolean;
  setUser: (user: IStore['user']) => void;
  type: "login" | "register" | null;
  handleType: (type: "login" | "register") => void;
}

export const useStore = create<IStore>()(
  devtools((set) => ({
    user: null,
    isAuthenticated: false,
    setUser: (user) => set({
      user,
      isAuthenticated: !!user,
    }),
    type: null,
    handleType: (type: "login" | "register") => set({ type }),
  }))
)