import { baseApi } from "@shared/api";
import type { IDishes } from "@shared/types/dishes/dishes.interface";
import { useQuery } from "@tanstack/react-query";

export const useDishes = () => {
  const { isLoading, error, data: dishes } = useQuery<IDishes[]>({
    queryKey: ["dishes"],
    queryFn: async () => {
      const response = await baseApi.get("/dish");
      return response.data;
    }
  })

  return { isLoading, error, dishes };
}