import { Container } from "@shared/ui/Container/Container";
import { HeroInfo } from "../HeroInfo/HeroInfo";
import { RestoranImage } from "../RestoranImage/RestoranImage";
import styles from './Hero.module.scss'

export const Hero = () => {
  return (
    <section className={styles.hero}>
      <Container className={styles.heroContainer}>
        <HeroInfo />

        <RestoranImage />
      </Container>
    </section>
  );
}