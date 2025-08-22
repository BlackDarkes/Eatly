import { Link } from "react-router";
import IconApple from "../../assets/icons/Apple_logo_black 1.svg?react";
import { LoginForm } from "@features/login";
import { RegisterForm } from "@features/register";
import styles from './FormPanel.module.scss'
import { Button } from "@shared/ui/Button/Button";

interface IFormPanelProps {
  type: "login" | "register" | "forgetPassword" | null;
}

export const FormPanel = ({ type }: IFormPanelProps) => {
  return (
    <div className={styles.formPanel}>
      <div>
        <div className={styles.formPanelTitleContainer}>
          <h2 className={styles.formPanelTitleContainerTitle}>Sign Up To eatly</h2>

          <div className={styles.formPanelTitleContainerButtons}>
            <Button type="button" className={styles.formPanelTitleContainerButton}>G</Button>
            <Button type="button" className={styles.formPanelTitleContainerButton}>
              <IconApple />
            </Button>
          </div>

          <p className={styles.formPanelTitleContainerOr}>OR</p>
        </div>

        <div>{type === "login" ? <LoginForm /> : <RegisterForm />}</div>
      </div>

      <div className={styles.formPanelSecure}>
        <Link to={"/"}>Privacy Policy</Link>
        <p>Copyright 2022</p>
      </div>
    </div>
  );
};
