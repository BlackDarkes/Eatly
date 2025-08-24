import { Button } from "@shared/ui/Button/Button";
import IconArrow from "/public/icons/Arrow.svg?react";
import { GenerateInfo } from "@widgets/downloadApp/modules/GenerateInfo";
import styles from './DownloadInfo.module.scss'

export const DownloadInfo = () => {
  return (
    <div className={styles.downInfo}>
      <h1 className={styles.downInfoTitle}>Premium <span className={styles.downInfoTitleQuality}>Quality</span> For Your Health</h1>
      <ul className={styles.downInfoList}>
        <GenerateInfo classLi={styles.downInfoLi} />
      </ul>
      <div className={styles.downInfoButtonBlock}>
        <Button className={styles.downInfoButton}>Download <IconArrow /></Button>
      </div>
    </div>
  );
}