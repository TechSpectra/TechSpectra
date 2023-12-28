"use client";

import { useEffect, useState, useRef } from "react";
import Image from "next/image";
import styles from "./page.module.css";
import Navbar from "@/components/Navbar";

const mapValue = (value, inMin, inMax, outMin, outMax) => {
  return ((value - inMin) * (outMax - outMin)) / (inMax - inMin) + outMin;
};

export default function Home() {
  const [imageDimensions, setImageDimensions] = useState({
    width: 644,
    height: 300,
  });
  const [topPosition, setTopPosition] = useState(0);
  const [imageVisible, setImageVisible] = useState(true);
  const [navbarVisible, setNavbarVisible] = useState(false);
  const [animateMovingPage, setAnimateMovingPage] = useState(false);
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
      if (scrollTop >= 450) {
        setNavbarVisible(true);
        setImageVisible(false);
        if (!animateMovingPage) {
          setAnimateMovingPage(true);
        }
      } else {
        setNavbarVisible(false);
        setImageVisible(true);
        if (animateMovingPage) {
          setAnimateMovingPage(false);
        }
      }
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <>
      {navbarVisible && <Navbar />}
      <div className={styles.landingPage}>
        <div className={styles.curate}>CURATE</div>
        <div
          className={styles.theWorldOf}
        >{`THE WORLD OF ARTIFICIAL INTELLIGENCE & OPEN SOURCE`}</div>
      </div>
      {imageVisible && (
        <Image
          ref={imageRef}
          className={styles.faceimage}
          style={{ top: `${55 - topPosition}%` }}
          src="/faceimage.svg"
          alt="Face Logo"
          width={imageDimensions.width}
          height={imageDimensions.height}
          priority
        />
      )}
      <div className={styles.movingPage}>
        {navbarVisible && (
          <>
            <div
              className={`${styles.see} ${
                animateMovingPage ? styles.animate1 : ""
              }`}
            >
              SEE
              <img alt="Eye Logo" src="/eye.svg" height={170} width={170} />
            </div>
            <div
              className={`${styles.share} ${
                animateMovingPage ? styles.animate2 : ""
              }`}
            >
              SHARE
              <img alt="Share Logo" src="/share.svg" height={115} width={115} />
            </div>
            <div
              className={`${styles.innovate} ${
                animateMovingPage ? styles.animate1 : ""
              }`}
            >
              <img
                alt="Innovate Logo"
                src="/innovate.svg"
                height={190}
                width={155}
              />
              INNOVATE
            </div>
          </>
        )}
      </div>

      <div className={styles.movingPage2}></div>
      <div className={styles.movingPage3}></div>
      <div className={styles.movingPage4}></div>
      <div className={styles.movingPage5}></div>
    </>
  );
}
