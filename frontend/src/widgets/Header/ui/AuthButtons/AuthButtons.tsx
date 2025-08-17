import { Button } from "@shared/ui/Button/Button";
import styles from './AuthButtons.module.scss'

interface IAuthButtonsProps {
  onLogin: () => void;
  onRegister: () => void;
  className?: string;
}
  
export const AuthButtons = ({ onLogin, onRegister, className }: IAuthButtonsProps) => {
  return (
    <div className={`${className ? className : ""} ${styles.authButtonsContainer}`}>
      <Button onClick={() => onLogin()} className={styles.authButtonsContainerButton}>Login</Button>
      <Button onClick={() => onRegister()} className={styles.authButtonsContainerButton}>Sign up</Button>
    </div>
  );
}