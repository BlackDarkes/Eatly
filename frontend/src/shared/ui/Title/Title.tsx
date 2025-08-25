import styles from './Title.module.scss'

interface ITitleProps {
  text: string;
  purpleText: string;
}

export const Title = ({ text, purpleText }: ITitleProps) => {
  return (
    <h1 className={styles.title}>
      {text}{" "}
      <span className={styles.titlePurple}>{purpleText}</span>
    </h1>
  );
};
