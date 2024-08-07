"use client";

import BrandIcon from "@/app/universal_Components/BrandImage/BrandImage";
import CustomCursor from "@/app/universal_Components/CustomCursor/CustomCursor";
import styles from "./ContentMainPage.module.css";

export default function ContentMainPage() {
  return (
    <CustomCursor>
      <div className={`${styles.mainContainer}`}>
        <BrandIcon fill={400} />
        <div>
          Work in progress...... <br />
        </div>
        <div>Latest work: Develop PWA</div>
      </div>
    </CustomCursor>
  );
}
