import type { ReactNode } from "react";
import styles from './Button.module.scss'

interface IButtonProps {
  children: ReactNode;
  className?: string;
  onClick?: () => void;
  type?: "button" | "submit";
}
  
export const Button = ({ children, className, onClick, type = "button" }: IButtonProps) => {
  return (
    <button type={type} onClick={onClick} className={`${className ? className : ""} ${styles.button}`}>
      {children}
    </button>
  );
}