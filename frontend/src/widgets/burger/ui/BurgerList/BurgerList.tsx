import { Navigation } from "@widgets/header";
import styles from './BurgerList.module.scss'
import { AuthButtons } from "@widgets/header/ui/AuthButtons/AuthButtons";

interface IBurgerListProps {
  isOpen: boolean;
  isAuthenticated: boolean;
  logout: () => void;
}
  
export const BurgerList = ({ isOpen, isAuthenticated, logout }: IBurgerListProps) => {
  return (
    <div className={`${isOpen ? styles.burgerActive : ""} ${styles.burger}`}>
      <Navigation page="home" className={styles.burgerList} />
      {isAuthenticated ? (
        <button type="button" onClick={() => {logout(); location.reload()}}>logout</button>
      ) : (
        <AuthButtons className={styles.burgerButtons} />
      ) }
    </div>
  );
}