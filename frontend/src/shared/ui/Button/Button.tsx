import type { ReactNode } from "react";
import styles from './Button.module.scss'

interface IButtonProps {
  children: ReactNode;
  onClick: () => void;
  className?: string;
}
  
export const Button = ({ children, className, onClick }: IButtonProps) => {
  return (
    <button type="button" onClick={onClick} className={`${className ? className : ""} ${styles.button}`}>
      {children}
    </button>
  );
}