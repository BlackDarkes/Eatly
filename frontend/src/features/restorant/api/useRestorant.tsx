import { baseApi } from "@shared/api";
import type { IRestorant } from "@shared/types/restorant/restorant.interface";
import { useQuery } from "@tanstack/react-query";

export const useRestorant = () => {
  const { isLoading, error, data: restorants } = useQuery<IRestorant[]>({
    queryKey: ["restoran"],
    queryFn: async () => {
      const response = await baseApi.get<IRestorant[]>("/restoran");
      return response.data;
    }
  })

  return { isLoading, error, restorants };
}