import type { ReactNode } from "react";
import styles from "./Button.module.scss";
import { Link } from "react-router";

interface IButtonProps {
  children: ReactNode;
  link?: string;
  className?: string;
  onClick?: () => void;
  type?: "button" | "submit";
}

export const Button = ({
  children,
  className,
  link,
  onClick,
  type = "button",
}: IButtonProps) => {
  return link ? (
    <Link to={link} className={`${className ? className : ""} ${styles.link}`}>{children}</Link>
  ) : (
    <button
      type={type}
      onClick={onClick}
      className={`${className ? className : ""} ${styles.button}`}
    >
      {children}
    </button>
  );
};
