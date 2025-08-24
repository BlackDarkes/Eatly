import { PopularRestorant } from "@features/restorant";
import { Container } from "@shared/ui/Container/Container";
import { Link } from "react-router";
import IconArrow from "/public/icons/Arrow.svg?react";
import styles from "./OurRestorants.module.scss";

export const OurRestorants = () => {
  return (
    <section className={styles.ourRestorants}>
      <Container className={styles.ourRestorantsContainer}>
        <h1 className={styles.ourRestorantsTitle}>
          Our Top{" "}
          <span className={styles.ourRestorantsTitleRestaurants}>
            Restaurants
          </span>
        </h1>

        <PopularRestorant />

        <Link to={"/menu"} className={styles.ourRestorantsView}>
          View All <IconArrow />
        </Link>
      </Container>
    </section>
  );
};
