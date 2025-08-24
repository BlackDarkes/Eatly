import { Container } from "@shared/ui/Container/Container";
import { DownloadImage } from "../DownloadImage/DownloadImage";
import { DownloadInfo } from "../DownloadInfo/DownloadInfo";
import styles from './DownloadApp.module.scss'

export const DownloadApp = () => {
  return (
    <section className={styles.downApp}>
      <Container className={styles.downAppContainer}>
        <DownloadImage />

        <DownloadInfo />
      </Container>
    </section>
  );
}