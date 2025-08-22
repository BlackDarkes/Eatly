import { useStore } from "@app/store/store"

export const useGoTo = ()=> {
  const { handleType } = useStore();

  const goTo = (type: "login" | "register" | "forgetPassword") => {
    handleType(type)
  }

  return { goTo };
}