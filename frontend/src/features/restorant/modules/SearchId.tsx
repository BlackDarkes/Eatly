import { useStore } from "@app/store/store";

export const SearchId = (id: string) => {
  const { favourites } = useStore();

  return favourites.includes(id);
}