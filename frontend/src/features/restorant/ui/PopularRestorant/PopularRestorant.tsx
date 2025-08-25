import { useRestorant } from "@features/restorant/api/useRestorant";
import { GenerateRestorant } from "@features/restorant/modules/GenerateRestorant";
import styles from './PopularRestorant.module.scss'
import type { MouseEvent } from "react";
import { useStore } from "@app/store/store";
  
export const PopularRestorant = () => {
  const { restorants } = useRestorant();
  const { changeFavouritesShop } = useStore();

  const handleClick = (e: MouseEvent<HTMLButtonElement>, favourit: string) => {
    e.stopPropagation();
    changeFavouritesShop(favourit);
  }

  return (
    <ul className={styles.list}>
      <GenerateRestorant restorants={restorants} handleCLick={handleClick} />
    </ul>
  );
}