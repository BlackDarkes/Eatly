import { useStore } from "@app/store/store";
import { FormPanel } from "../FormPanel/FormPanel";
import styles from "./AuthForms.module.scss";
import { AsidePanel } from "../AsidePanel/AsidePanel";
import { useLocation } from "react-router";
import { Container } from "@shared/ui/Container/Container";

export const AuthForms = () => {
  const { type } = useStore();
  const navigation = useLocation().pathname;
  const currentRoute = navigation.split('/').pop() as "login" | "register" | "forgetPassword";

  return (
    <>
      <section
        className={`${styles.authForm} ${type ? styles.authFormActive : ""}`}
      >
        <Container className={styles.authFormContainer}>
          <FormPanel type={currentRoute} />

          <AsidePanel />
        </Container>
      </section>
    </>
  );
};
