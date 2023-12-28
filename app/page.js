import Image from 'next/image'
import styles from "./page.module.css";

export default function Home() {
  return (
    <div className={styles.landingPage}>
      <div className={styles.curate}>CURATE</div>
      <div className={styles.theWorldOf}>{`THE WORLD OF ARTIFICIAL INTELLIGENCE & OPEN SOURCE`}</div>
      <Image
          className={styles.faceimage}
          src="/faceimage.svg"
          alt="Face Logo"
          width={544}
          height={300}
          priority
        />
    </div>
  );
}
