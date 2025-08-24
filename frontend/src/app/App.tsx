
import { RouterProvider } from "react-router";
import { router } from "./routers/browserRouter";
import { QueryClientProvider } from "@tanstack/react-query";
import { queryClient } from "./routers/queryRouter";
import { useStore } from "./store/store";
import { useEffect } from "react";
import { useTokenRefresh } from "@shared/hooks/useTokenRefresh";

function App() {
  const { checkAuth } = useStore();
  
  useTokenRefresh();

  useEffect(() => {
    checkAuth();
    
    if (!localStorage.getItem("favourites")) {
      localStorage.setItem("favourites", JSON.stringify([]));
    }
  }, [checkAuth])

  return (
    <QueryClientProvider client={queryClient}>
      <RouterProvider router={router} />
    </QueryClientProvider>
  );
}

export default App;
