import { useStore } from "@app/store/store";
import type { ILogin } from "@shared/types";
import { useMutation } from "@tanstack/react-query";
import axios from "axios";

// useLogin.ts
export const useLogin = () => {
  const { setUser } = useStore();

  const mutation = useMutation({
    mutationFn: async (user: ILogin) => {
      const response = await axios.post(
        `${import.meta.env.VITE_API_URL}/auth/login`,
        user,
        {
          withCredentials: true,
          headers: { "Content-Type": "application/json" },
        }
      );
      return response.data;
    },
    onSuccess: (data) => {
      setUser(data.user);
    }
  });

  return mutation;
};