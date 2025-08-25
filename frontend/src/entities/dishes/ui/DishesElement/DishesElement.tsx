import type { IDishes } from "@entitiesdishes/types/dishes/dishes.interface";
import IconHeart from "../../assets/heart.svg?react";
import IconPlus from "../../assets/plus.svg?react";
import IconStar from "/public/icons/Star.svg?react";
import { Link } from "react-router";
import { TYPES_EAT } from "@shared/constants";
import { TEXT_EAT } from "@shared/constants/textEat/textEat";
import { SearchCartId } from "@features/dishes/modules/SearchCartId";
import { SearchId } from "@shared/hooks/SearchId";
import styles from "./DishesElement.module.scss";

interface IDishesElementProps {
  dish: IDishes;
  handleClickFavourit: (dish: string) => void;
  handleClickCart: (dish: string) => void;
}

export const DishesElement = ({
  dish,
  handleClickFavourit,
  handleClickCart,
}: IDishesElementProps) => {
  return (
    <li className={styles.item}>
      <button
        type="button"
        onClick={() => handleClickFavourit(dish.id)}
        className={`${styles.itemFavourit} ${
          SearchId(dish.id, "dish") ? styles.itemFavouritSelect : ""
        }`}
      >
        <IconHeart />
      </button>
      <Link to={`/dish/${dish.id}`} className={styles.itemLink}>
        <img src={`${import.meta.env.VITE_API_URL}/${dish.img}`} alt="" />

        <div>
          <span
            style={{
              backgroundColor:
                TYPES_EAT[dish.type as keyof typeof TYPES_EAT] || "",
              color: TEXT_EAT[dish.type as keyof typeof TEXT_EAT] || "",
            }}
            className={styles.itemType}
          >
            {dish.type}
          </span>

          <h3 className={styles.itemTitle}>{dish.name}</h3>

          <span className={styles.itemRating}>
            <p className={styles.itemTime}>{dish.time}min •</p>{" "}
            <IconStar className={styles.itemStar} /> {dish.stars}
          </span>

          <p className={styles.itemPrice}>${dish.price}</p>
        </div>
      </Link>
      <button
        type="button"
        onClick={() => handleClickCart(dish.id)}
        className={`${styles.itemBuy} ${
          SearchCartId(dish.id) ? styles.itemBuySelect : ""
        }`}
      >
        <IconPlus
          className={`${styles.itemImage} ${
            SearchCartId(dish.id) ? styles.itemImageSelect : ""
          }`}
        />
      </button>
    </li>
  );
};
