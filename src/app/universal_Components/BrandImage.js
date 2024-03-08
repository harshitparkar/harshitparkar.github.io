import { useTheme } from "next-themes";
import Image from "next/image";
import { useEffect, useState } from "react";
import { AppConstants } from "../utils/AppConstant";

export default function BrandIcon() {
  const [mounted, setMounted] = useState(false);
  const { theme } = useTheme();

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) return null; // Don't render anything until theme is mounted

  return (
    <Image
      src="/BrandIcon.png" // Replace with the actual path to your image
      alt="Your Image"
      width={50} // Set your desired width
      height={50} // Set your desired height
      style={{
        filter:
          theme === AppConstants.DARK_THEME
            ? "brightness(0) invert(1)"
            : "brightness(0) invert(0)",
      }}
    />
  );
}
