import styles from "./PortfolioItem.module.css";

export default function PortfolioItem({ title, category, description }) {
  return (
    <div className={styles.card}>
      <div className={styles.imagePlaceholder}></div>
      <div className={styles.info}>
        <span>{category}</span>
        <h3>{title}</h3>
        <p>{description}</p>
      </div>
    </div>
  );
}