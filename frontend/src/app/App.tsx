import { RouterProvider } from "react-router";
import { router } from "./routers/browserRouter";
import { QueryClientProvider } from "@tanstack/react-query";
import { queryClient } from "./routers/queryRouter";

function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <RouterProvider router={router} />
    </QueryClientProvider>
  );
}

export default App;
