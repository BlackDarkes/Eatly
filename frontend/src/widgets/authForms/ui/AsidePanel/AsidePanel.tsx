import styles from './AsidePanel.module.scss'

interface IAsidePanelProps {
  className?: string | undefined;
}
  
export const AsidePanel = ({ className }: IAsidePanelProps) => {
  return (
    <div className={styles.asidePanel}>
      <h1 className={className}>Find Foods With Love </h1>
    </div>
  );
}