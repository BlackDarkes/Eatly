import { Container } from "@shared/ui/Container/Container";
import { Navigation } from "../Navigation/Navigation";
import { Link } from "react-router";
import { AuthButtons } from "../AuthButtons/AuthButtons";
import { Burger } from "../../../burger/ui/Burger/Burger";
import LogoImage from "/logo.svg";
import styles from './Header.module.scss'
import { useState } from "react";
import { AuthForms } from "@widgets/authForms";

interface IHeaderProps {
  page: string
}
  
export const Header = ({ page }: IHeaderProps) => {
  const [isOpen, setIsOpen] = useState<boolean>(false);

  const handleOpen = () => {
    setIsOpen(!isOpen);
  }

  const onLogin = () => {
    console.log("Login");
  }

  const onRegister = () => {
    console.log("register")
  }

  return (
    <header className={styles.header}>
      <Container className={styles.headerContainer}>
        <div className={styles.headerNav}>
          <Link to={"/"} className={styles.headerLogoLink}>
            <p className={styles.headerLogo}>
              <img src={LogoImage} alt="" />
              eatly
            </p>
          </Link>

          <nav className={styles.headerList}>
            <Navigation page={page} />
          </nav>
        </div>

        <AuthButtons onLogin={onLogin} className={styles.headerAuthButtons} onRegister={onRegister} />

        <Burger isOpen={isOpen} handleOpen={handleOpen} onLogin={onLogin} onRegister={onRegister} />

        <AuthForms />
      </Container>
    </header>
  );
}