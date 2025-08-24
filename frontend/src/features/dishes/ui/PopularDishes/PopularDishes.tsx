import { useDishes } from "@features/dishes/api/useDishes";
import { GenerateDishes } from "@features/dishes/modules/GenerateDishes";
import styles from './PopularDishes.module.scss'

export const PopularDishes = () => {
  const { dishes } = useDishes();

  return (
    <ul className={styles.list}>
      <GenerateDishes dishes={dishes} />
    </ul>
  );
}