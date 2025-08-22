import { baseApi } from "@shared/api";
import type { IRegister } from "@shared/types";
import { useMutation } from "@tanstack/react-query";

export const useRegister = () => {
  const mutation = useMutation({
    mutationFn: async (user: IRegister) => {
      const response = await baseApi.post(
        "/auth/register",
        user,
        {
          headers: {
            "Content-Type": "application/json",
          },
        },
      );
      return response.data
    }
  })

  return mutation;
}