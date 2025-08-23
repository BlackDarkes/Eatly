import { Container } from "@shared/ui/Container/Container";
import { GenerateFeatures } from "@widgets/features/modules/GenerateFeatures";
import ImageBG from "../../assets/BG.png";
import styles from './Features.module.scss'

export const Features = () => {
  return (
    <section className={styles.features} style={{ backgroundImage: `url(${ImageBG})` }}>
      <Container>
        <ul className={styles.featuresList}>
          <GenerateFeatures />
        </ul>
      </Container>
    </section>
  );
}