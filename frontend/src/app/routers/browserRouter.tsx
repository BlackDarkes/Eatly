
import { HomePage } from "@pages/index";
import { LoginPage } from "@pages/Login/LoginPage";
import { RegisterPage } from "@pages/Register/RegisterPage";
import { createBrowserRouter } from "react-router";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <HomePage />
  },
  {
    path: "/auth",
    children: [
      {
        path: "login",
        element: <LoginPage />
      },
      {
        path: "register",
        element: <RegisterPage />
      }
    ]
  }
])