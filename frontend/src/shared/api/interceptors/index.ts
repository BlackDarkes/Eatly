import { addAuthInterceptor } from "./auth";

export const initInterceptor = () => {
  addAuthInterceptor()
}