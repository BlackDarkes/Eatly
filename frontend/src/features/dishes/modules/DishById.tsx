import { useDish } from "../api/useDishes";

export const DishById = (id: string) => {
  const { isLoading, error, dish } = useDish(id);

  return { isLoading, error, dish };
}