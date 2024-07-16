"use client";
import { useTheme } from "next-themes";
import Image from "next/image";
import { useEffect, useState } from "react";
import { AppConstants } from "../../utils/AppConstant";
import styles from "./BrandImage.module.css";

export default function BrandIcon({ fill }) {
  const [mounted, setMounted] = useState(false);
  const { theme } = useTheme();

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) return null; // Don't render anything until theme is mounted

  return (
    <Image
      src="/BrandIcon2.png" // Replace with the actual path to your image
      alt="Harshit S. Parkar"
      width={fill} // Set your desired width
      height={fill} // Set your desired height
      className={`${
        theme === AppConstants.DARK_THEME
          ? styles.image_Black
          : styles.image_White
      }`}
    />
  );
}
