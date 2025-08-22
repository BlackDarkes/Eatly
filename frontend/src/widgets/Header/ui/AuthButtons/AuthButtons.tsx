import { Button } from "@shared/ui/Button/Button";
import styles from './AuthButtons.module.scss'

interface IAuthButtonsProps {
  className?: string;
}
  
export const AuthButtons = ({ className }: IAuthButtonsProps) => {
  return (
    <div className={`${styles.authButtonsContainer} ${className ? className : ""}`}>
      <Button link={"/auth/login"} className={styles.authButtonsContainerButton}>Login</Button>
      <Button link={"/auth/register"} className={styles.authButtonsContainerButton}>Sign up</Button>
    </div>
  );
}