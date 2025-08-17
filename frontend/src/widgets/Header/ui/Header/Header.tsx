import { Container } from "@shared/ui/Container/Container";
import { Navigation } from "../Navigation/Navigation";
import { Link } from "react-router";
import { AuthButtons } from "../AuthButtons/AuthButtons";
import LogoImage from "../../assets/logo.png";
import styles from './Header.module.scss'

interface IHeaderProps {
  page: string
}
  
export const Header = ({ page }: IHeaderProps) => {
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
          <Link to={"/"}>
            <img src={LogoImage} alt="Логотип" />
          </Link>

          <nav>
            <Navigation page={page} />
          </nav>
        </div>

        <AuthButtons onLogin={onLogin} onRegister={onRegister} />
      </Container>
    </header>
  );
}