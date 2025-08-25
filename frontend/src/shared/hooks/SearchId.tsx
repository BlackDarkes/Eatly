import { useStore } from "@app/store/store";

export const SearchId = (id: string, stor: string) => {
  const { favouritesShop, favouritesDishes } = useStore();

  return stor === "dish" ? favouritesDishes.includes(id) : stor === "shop" ? favouritesShop.includes(id) : null;
}