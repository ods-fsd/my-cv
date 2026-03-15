import styles from './Footer.module.css';

export default function Footer() {
  return (
    <footer className={`${styles.footer} no-print`}>
      <p>
        © {new Date().getFullYear()} <span className={styles.highlight}>Denys Orlyk</span>. 
        Розроблено за допомогою Next.js та Node.js.
      </p>
    </footer>
  );
}