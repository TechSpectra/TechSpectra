'use client'

import { useEffect, useState, useRef } from 'react';
import Image from 'next/image'
import styles from "./page.module.css";

const mapValue = (value, inMin, inMax, outMin, outMax) => {
  return ((value - inMin) * (outMax - outMin)) / (inMax - inMin) + outMin;
};

export default function Home() {
  const [imageDimensions, setImageDimensions] = useState({ width: 644, height: 300 });
  const [topPosition, setTopPosition] = useState(0);
  const imageRef = useRef();

  useEffect(() => {
    const handleScroll = () => {
      const scrollTop = window.scrollY || document.documentElement.scrollTop;
      
      // Adjust the formulas as needed
      const newWidth = 644 + scrollTop * 0.5;
      const newHeight = 300 + scrollTop * 3;
      setImageDimensions({ width: newWidth, height: newHeight });

      // Adjust the formula as needed
      const newTopPosition = scrollTop * 0.4;
      setTopPosition(newTopPosition);

      // Adjust the opacity based on scrollTop
      const opacity = mapValue(scrollTop, 0, 500, 1, 0);

      if (imageRef.current) {
        imageRef.current.style.opacity = opacity;
      }
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
    </div>
    <Image
          ref={imageRef}
          className={styles.faceimage}
          style={{ top: `${50 - topPosition}%` }}
          src="/faceimage.svg"
          alt="Face Logo"
          width={imageDimensions.width}
          height={imageDimensions.height}
          priority
        />

    <div className={styles.movingPage}>
      <div className={styles.see}>SEE</div>
      <div className={styles.share}>SHARE</div>
      <div className={styles.innovate}>INNOVATE</div>
    </div>
    <div className={styles.movingPage2}>
      <div className={styles.see}>SEE</div>
      <div className={styles.share}>SHARE</div>
      <div className={styles.innovate}>INNOVATE</div>
    </div>
    <div className={styles.movingPage3}>
      <div className={styles.see}>SEE</div>
      <div className={styles.share}>SHARE</div>
      <div className={styles.innovate}>INNOVATE</div>
    </div>
    <div className={styles.movingPage4}>
      <div className={styles.see}>SEE</div>
      <div className={styles.share}>SHARE</div>
      <div className={styles.innovate}>INNOVATE</div>
    </div>
    <div className={styles.movingPage5}>
      <div className={styles.see}>SEE</div>
      <div className={styles.share}>SHARE</div>
      <div className={styles.innovate}>INNOVATE</div>
    </div>
    </>
  );
}
