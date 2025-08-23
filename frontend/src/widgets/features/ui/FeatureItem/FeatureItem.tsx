import type { IFeatures } from "@widgets/features/types/features.interface";
import styles from './FeatureItem.module.scss'

interface IFeatureItemProps {
  item: IFeatures;
}
  
export const FeatureItem = ({ item }: IFeatureItemProps) => {
  return (
    <li className={styles.item}>
      <h1 className={styles.itemCount}>{item.count}</h1>
      <p className={styles.itemInfo}>{item.info}</p>
    </li>
  );
}