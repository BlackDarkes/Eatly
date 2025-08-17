import { NAVIGATION_POINTS } from "@shared/constants/navigation";
import { Link } from "react-router";
import styles from './navigation.module.scss'

interface INavigationProps {
  page: string;
  className?: string;
}
  
export const Navigation = ({ page, className }: INavigationProps) => {
  return (
    <ul className={`${className ? className : ""} ${styles.list}`}>
      {NAVIGATION_POINTS.map((point) => {
        return (
          <li key={point}>
            <Link to={`/${point.toLowerCase()}`} className={`${page === point ? "" : ""}`}>
              {point}
            </Link>
          </li>
        )
      })}
    </ul>
  );
}