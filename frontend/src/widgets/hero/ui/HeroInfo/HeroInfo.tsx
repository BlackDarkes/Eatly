import { Button } from "@shared/ui/Button/Button";
import IconLine from "../../assets/icons/Line.svg?react";
import ImageCompany from "../../assets/company.png";
import { GenerateStars } from "@widgets/hero/modules/GenerateStars";
import styles from './HeroInfo.module.scss'

export const HeroInfo = () => {
  return (
    <div className={styles.heroInfo}>
      <div className={styles.heroInfoTitleCont}>
        <p className={styles.heroInfoCount}>
          <IconLine />
          <span>OVER 1000 USERS</span>
        </p>

        <h1 className={styles.heroInfoTitle}>
          Enjoy Foods All Over The <span className={styles.heroInfoTitleWorld}>World</span>
        </h1>

        <p className={styles.heroInfoAbout}>
          EatLy help you set saving goals, earn cash back offers, Go to
          disclaimer for more details and get paychecks up to two days early.
          Get a <span className={styles.heroInfoAboutBonus}>$20 bonus.</span>
        </p>
      </div>

      <div className={styles.heroInfoButtons}>
        <Button link={"/menu"} className={styles.heroInfoButton}>Get Started</Button>
        <Button link={"/subscribe"} className={styles.heroInfoButtonSub}>Go Pro</Button>
      </div>

      <div className={styles.heroInfoCompany}>
        <img src={ImageCompany} alt="Компания truspilot" />

        <p className={styles.heroInfoStars}>
          <span>
            <GenerateStars count={5} />
          </span>
          4900+
        </p>
      </div>
    </div>
  );
};
