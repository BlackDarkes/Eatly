import { useStore } from "@app/store/store";
  
export const SearchCartId = (id: string) => {
  const { cart } = useStore();

  return cart.includes(id);
}