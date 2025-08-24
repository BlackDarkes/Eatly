import ImageMobileScreen from "../../assets/mobileScreen.png";
import styles from './DownloadImage.module.scss'

export const DownloadImage = () => {
  return (
    <div className={styles.downImage}>
      <div className={styles.downImageImage}>
        <img src={ImageMobileScreen} alt="Экран мобильного устройства" />
      </div>
    </div>
  );
}