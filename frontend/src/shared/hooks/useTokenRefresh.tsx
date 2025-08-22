import { useStore } from "@app/store/store";
import { baseApi } from "@shared/api";
import { useEffect } from "react";

export const useTokenRefresh = () => {
  const { isAuthenticated } = useStore();

  useEffect(() => {
    if (!isAuthenticated) return;

    const interval = setInterval(async () => {
      try {
        await baseApi.post("/auth/refresh");
        console.log('Token refreshed successfully');
      } catch(error) {
        console.log('Token refresh failed', error)
      }

      return () => clearInterval(interval);
    }, 15 * 60 * 1000);
  }, [isAuthenticated]);
}