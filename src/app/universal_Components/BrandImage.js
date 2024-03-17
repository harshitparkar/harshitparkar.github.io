"use client";
import { useTheme } from "next-themes";
import Image from "next/image";
import { useEffect, useState } from "react";
import { AppConstants } from "../utils/AppConstant";

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
      alt="Brand Icon"
      width={fill} // Set your desired width
      height={fill} // Set your desired height
      style={{
        filter:
          theme === AppConstants.DARK_THEME
            ? "brightness(0) invert(1)"
            : "brightness(0) invert(0)",
      }}
    />
  );
}
