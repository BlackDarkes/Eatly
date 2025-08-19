import { create } from "zustand";
import { devtools } from "zustand/middleware";

interface IStore {
  token: string | null;
  setToken: (token: string) => void;
}

export const useStore = create<IStore>()(
  devtools((set) => ({
    token: null,
    setToken: (token: string) => set({ token }),
  }))
)