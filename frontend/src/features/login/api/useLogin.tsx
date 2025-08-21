import { useStore } from "@app/store/store";
import { baseApi } from "@shared/api";
import type { ILogin } from "@shared/types";
import { useMutation } from "@tanstack/react-query";

export const useLogin = () => {
  const { setUser } = useStore();

  const mutation = useMutation({
    mutationFn: async (user: ILogin) => {
      const response = await baseApi.post(
        "/auth/login",
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