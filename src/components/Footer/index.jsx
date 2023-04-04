import styles from "src/components/Footer/Footer.module.css";

export function Footer() {
  return (
    <footer className={styles.footer}>
      <a>
        Thanks by{" "}
        <img src="/vercel.svg" alt="Vercel Logo" className={styles.logo} />
      </a>
    </footer>
  );
}
