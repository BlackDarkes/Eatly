import { Link } from "react-router";
import type { MouseEvent } from "react";
import type { IRestorant } from "src/entities/restorant/types/restorant.interface";
import { TYPES_EAT } from "@shared/constants";
import { TEXT_EAT } from "@shared/constants/textEat/textEat";
import { SearchId } from "@shared/hooks/SearchId";
import IconStar from "/public/icons/Star.svg?react";
import IconBookMark from "../../assets/bookMark.svg?react";
import styles from "./RestorantElement.module.scss";

interface IRestorantElementProps {
  restorant: IRestorant;
  handleClick: (e: MouseEvent<HTMLButtonElement>) => void;
}

export const RestorantElement = ({
  restorant,
  handleClick,
}: IRestorantElementProps) => {
  return (
    <li className={styles.item}>
      <Link to={`/restoran/${restorant.id}`}>
        <img
          src={`${import.meta.env.VITE_API_URL}${restorant.img}`}
          alt={`Ресторан ${restorant.name}`}
          className={styles.itemImage}
        />
        <div className={styles.itemInfo}>
          <div>
            <span
              style={{
                backgroundColor:
                  TYPES_EAT[restorant.type as keyof typeof TYPES_EAT] || "",
                color: TEXT_EAT[restorant.type as keyof typeof TEXT_EAT] || "",
              }}
              className={styles.itemType}
            >
              {restorant.type}
            </span>
            <h3 className={styles.itemTitle}>{restorant.name}</h3>
            <span className={styles.itemRating}>
              <p className={styles.itemTime}>{restorant.time}min •</p>{" "}
              <IconStar className={styles.itemStar} /> {restorant.stars}
            </span>
          </div>
        </div>
      </Link>
      <button
        type="button"
        onClick={handleClick}
        className={`${styles.itemFavourites} ${
          SearchId(restorant.id, "shop") ? styles.itemFavouritesSelect : ""
        }`}
      >
        <IconBookMark />
      </button>
    </li>
  );
};
