import styles from "./page.module.css";

export default function Home() {
  return (
    <div className={styles.landingPage}>
      <div className={styles.curate}>CURATE</div>
      <div className={styles.theWorldOf}>{`THE WORLD OF ARTIFICIAL INTELLIGENCE & OPEN SOURCE`}</div>
    </div>
  );
}
