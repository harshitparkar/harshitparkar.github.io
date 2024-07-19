"use client";
import ThemeSwitcher from "@/app/pageSections/header/header_sections/header_ThemeSwitcher/ThemeSwitcher";
import BrandIcon from "@/app/universal_Components/BrandImage/BrandImage";
import { useEffect, useState } from "react";
import RecruitmentStatus from "../header_RecruitmentStatus/RecruitmentStatus";
import MenuNavBar from "../header_MenuNav/MenuNavBar";
import styles from "./header.module.css";

export default function Header() {
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) return null; // Don't render anything until theme is mounted

  return (
    <header className={`${styles.mainContainer}`}>
      <div className={`${styles.leftContainer}`}>
        <BrandIcon fill={50} />
        <MenuNavBar />
      </div>
      <div className={`${styles.rightContainer}`}>
        {/* Recruitment status: True => Open for work & False => Still not looking */}
        <RecruitmentStatus getting_recruited={false} />
        <ThemeSwitcher />
      </div>
    </header>
  );
}
