import ImageFood from "../../assets/Food.png";
import styles from './RestoranImage.module.scss'

interface IRestoranImageProps {
  className?: string;
}
  
export const RestoranImage = ({ className }: IRestoranImageProps) => {
  const classA = className;

  console.log(classA);

  return (
    <div className={styles.restoranImage}>
      <div className={styles.restoranImageImage}>
        <img src={ImageFood} alt="еда" />
      </div>
    </div>
  );
}