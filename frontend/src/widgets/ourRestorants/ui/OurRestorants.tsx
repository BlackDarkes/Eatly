import { PopularRestorant } from "@features/restorant";
import { Container, ViewsAll } from "@shared/ui";
import styles from "./OurRestorants.module.scss";
import { Title } from "@shared/ui/Title/Title";

export const OurRestorants = () => {
  return (
    <section className={styles.ourRestorants}>
      <Container className={styles.ourRestorantsContainer}>
        <Title text="Our Top" purpleText="Restaurants" />

        <PopularRestorant />

        <ViewsAll link="/menu" />
      </Container>
    </section>
  );
};
