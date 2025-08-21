
import { RouterProvider } from "react-router";
import { router } from "./routers/browserRouter";
import { QueryClientProvider } from "@tanstack/react-query";
import { queryClient } from "./routers/queryRouter";
import { useStore } from "./store/store";
import { useEffect } from "react";

function App() {
  const { checkAuth } = useStore();

  useEffect(() => {
    checkAuth();
  }, [checkAuth])

  return (
    <QueryClientProvider client={queryClient}>
      <RouterProvider router={router} />
    </QueryClientProvider>
  );
}

export default App;
