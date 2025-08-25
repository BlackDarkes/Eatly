import { useDishes } from "@features/dishes/api/useDishes";
import { GenerateDishes } from "@features/dishes/modules/GenerateDishes";
import styles from "./PopularDishes.module.scss";
import { useStore } from "@app/store/store";

export const PopularDishes = () => {
  const { dishes } = useDishes();
  const { changeFavouritesDishes, changeCart } = useStore();

  const handleClickFavourit = (dish: string) => {
    changeFavouritesDishes(dish);
  };

  const handleClickCart = (dish: string) => {
    changeCart(dish);
  }

  return (
    <ul className={styles.list}>
      <GenerateDishes dishes={dishes} handleClickFavourit={handleClickFavourit} handleClickCart={handleClickCart} />
    </ul>
  );
};
