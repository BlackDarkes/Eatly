
import { HomePage } from "@pages/index";
import { createBrowserRouter } from "react-router";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <HomePage />
  }
])