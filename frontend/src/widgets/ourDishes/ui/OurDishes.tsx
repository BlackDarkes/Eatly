import { PopularDishes } from "@features/dishes/ui/PopularDishes/PopularDishes";
import { Container } from "@shared/ui/Container/Container";
import styles from './OurDishes.module.scss'
import { ViewsAll } from "@shared/ui";
import { Title } from "@shared/ui/Title/Title";

export const OurDishes = () => {
  return (
    <section className={styles.ourDishes}>
      <Container className={styles.ourDishesContainer}>
        <Title text="Our Top " purpleText="Dishes" />

        <PopularDishes />

        <ViewsAll link="/menu" />
      </Container>
    </section>
  );
}