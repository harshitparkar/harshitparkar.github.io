"use client";

import BrandIcon from "@/app/universal_Components/BrandImage/BrandImage";
import CustomCursor from "@/app/universal_Components/CustomCursor/CustomCursor";
import styles from "./ContentMainPage.module.css";

export default function ContentMainPage() {
  return (
    <div className={styles.mainContainer}>
      <div className={styles.introText}>
        <h1>Hi, I’m Harshit Parkar </h1>
        <h3>A React Native Developer building seamless mobile experiences.
          With 5+ years of crafting apps that scale, I blend design, performance, and business logic to deliver digital products that work beautifully. Let’s build something impactful together.
        </h3>
      </div>
      <BrandIcon fill={350} />
    </div>
  );
}
