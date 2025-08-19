import { Navigation } from "@widgets/header";
import styles from './BurgerList.module.scss'
import { AuthButtons } from "@widgets/header/ui/AuthButtons/AuthButtons";

interface IBurgerListProps {
  isOpen: boolean;
  onLogin: () => void;
  onRegister: () => void;
}
  
export const BurgerList = ({ isOpen, onLogin, onRegister }: IBurgerListProps) => {
  return (
    <div className={`${isOpen ? styles.burgerActive : ""} ${styles.burger}`}>
      <Navigation page="home" className={styles.burgerList} />
      <AuthButtons onLogin={onLogin} className={styles.burgerButtons} onRegister={onRegister} />
    </div>
  );
}