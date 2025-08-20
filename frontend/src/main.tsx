import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import App from "./app/App.tsx";
import "@shared/styles/base/normalize.scss";
import "@shared/styles/base/globals.scss";
import "@shared/styles/base/fonts.scss";
import "@shared/api";

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <App />
  </StrictMode>
);
