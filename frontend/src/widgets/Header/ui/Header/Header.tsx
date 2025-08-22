import { Container } from "@shared/ui/Container/Container";
import { Navigation } from "../Navigation/Navigation";
import { Link } from "react-router";
import { AuthButtons } from "../AuthButtons/AuthButtons";
import { Burger } from "../../../burger/ui/Burger/Burger";
import LogoImage from "/logo.svg";
import styles from './Header.module.scss'
import { useState } from "react";
import { useStore } from "@app/store/store";

interface IHeaderProps {
  page: string;
}
  
export const Header = ({ page }: IHeaderProps) => {
  const [isOpen, setIsOpen] = useState<boolean>(false);
  const { isAuthenticated, logout } = useStore();

  const handleOpen = () => {
    setIsOpen(!isOpen);
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

        { isAuthenticated ? (
          <button type="button" onClick={() => {logout(); location.reload()}} className={styles.logout}>Logout</button>
        ) : (
          <AuthButtons className={styles.headerAuthButtons} />
        ) }

        <Burger isOpen={isOpen} handleOpen={handleOpen}/>
      </Container>
    </header>
  );
}