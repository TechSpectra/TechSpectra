"use client";

import React from "react";
import Image from "next/image";
import styles from "./navbar.module.css";

export default function Navbar() {
  return (
    <div className={styles.homeParent}>
      <Image
        className={styles.techlogo}
        src="/tech.svg"
        alt="Face Logo"
        width={120}
        height={120}
        priority
      />
      <div className={styles.links}>
      <div className={styles.home1}>HOME</div>
      <div className={styles.aboutUs}>ABOUT US</div>
      <div className={styles.aboutUs}>CONTACT US</div>
      <div className={styles.aboutUs}>RESOURCES</div>
      </div>
    </div>
  );
}
