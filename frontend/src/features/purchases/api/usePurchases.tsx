import { useStore } from "@app/store/store";
import type { IPurchases } from "@entities/controlPurchases/types/purchases.interface";
import { baseApi } from "@shared/api";
import { useQuery } from "@tanstack/react-query";

export const usePurchases = () => {
  const { user } = useStore();
  const { isLoading, error, data: purchases } = useQuery<IPurchases[]>({
    queryKey: ["purchases"],
    queryFn: async () => {
      const response = await baseApi.get(`/user/${user?.id}/purchases`);
      return response.data;
    }
  })

  return { isLoading, error, purchases };
}