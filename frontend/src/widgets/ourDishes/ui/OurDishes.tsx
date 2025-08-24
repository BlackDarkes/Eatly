import { PopularDishes } from "@features/dishes/ui/PopularDishes/PopularDishes";
import { Container } from "@shared/ui/Container/Container";
import styles from './OurDishes.module.scss'

export const OurDishes = () => {
  return (
    <section className={styles.ourDishes}>
      <Container>
        <h1>Our Top <span>Dishes</span></h1>

        <PopularDishes />
      </Container>
    </section>
  );
}