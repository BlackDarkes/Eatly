import { Link } from "react-router";
import IconArrow from "/public/icons/Arrow.svg?react";
import styles from './ViewsAll.module.scss'

interface IViewsAllProps {
  link: string;
}

export const ViewsAll = ({ link }: IViewsAllProps) => {
  return (
    <Link to={link} className={styles.view}>
      View All <IconArrow />
    </Link>
  );
};
