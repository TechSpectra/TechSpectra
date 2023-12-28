'use client'

import { useEffect, useState } from 'react';
import Image from 'next/image'
import styles from "./page.module.css";

export default function Home() {
  const [imageDimensions, setImageDimensions] = useState({ width: 644, height: 300 });
  const [topPosition, setTopPosition] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      const scrollTop = window.scrollY || document.documentElement.scrollTop;
      
      // Adjust the formulas as needed
      const newWidth = 644 + scrollTop * 0.5;
      const newHeight = 300 + scrollTop * 20;
      setImageDimensions({ width: newWidth, height: newHeight });

      // Adjust the formula as needed
      const newTopPosition = scrollTop * 20;
      setTopPosition(newTopPosition);
    };

    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <>
    <div className={styles.landingPage}>
      <div className={styles.curate}>CURATE</div>
      <div className={styles.theWorldOf}>{`THE WORLD OF ARTIFICIAL INTELLIGENCE & OPEN SOURCE`}</div>
      <Image
          className={styles.faceimage}
          style={{ bottom: `-${50+topPosition}%` }}
          src="/faceimage.svg"
          alt="Face Logo"
          width={imageDimensions.width}
          height={imageDimensions.height}
          priority
        />
    </div>
    <div className={styles.movingPage}>
      <div className={styles.see}>SEE</div>
      <div className={styles.share}>SHARE</div>
      <div className={styles.innovate}>INNOVATE</div>
    </div>
    </>
  );
}
