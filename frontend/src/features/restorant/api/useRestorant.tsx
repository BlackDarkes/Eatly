import { baseApi } from "@shared/api";
import type { IRestorant } from "src/entities/restorant/types/restorant.interface";
import { useQuery } from "@tanstack/react-query";

export const useRestorant = () => {
  const {
    isLoading,
    error,
    data: restorants,
  } = useQuery<IRestorant[]>({
    queryKey: ["restoran"],
    queryFn: async () => {
      const response = await baseApi.get<IRestorant[]>("/restoran");
      return response.data;
    },
  });

  return { isLoading, error, restorants };
};
