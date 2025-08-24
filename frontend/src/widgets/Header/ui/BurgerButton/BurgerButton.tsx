import styles from './BurgerButton.module.scss'

interface IBurgerButtonProps {
  isOpen: boolean;
  handleOpen: () => void;
}

export const BurgerButton = ({ isOpen, handleOpen }: IBurgerButtonProps) => {
  return (
    <button
      type="button"
      className={`${styles.burger} ${isOpen ? styles.burgerActive : ""}`}
      onClick={handleOpen}
    >
      <span
        className={`${styles.burgerSlash} ${
          isOpen ? styles.burgerSlashActive : ""
        }`}
      />
    </button>
  );
};
