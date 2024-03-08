"use client";
import ThemeSwitcher from "@/app/ThemeSwitcher";
import BrandIcon from "@/app/universal_Components/BrandImage";
import { useTheme } from "next-themes";
import { useEffect, useState } from "react";

export default function Header() {
  const [mounted, setMounted] = useState(false);
  const { theme } = useTheme();

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) return null; // Don't render anything until theme is mounted

  return (
    <div className="flex flex-row justify-between mx-6">
      <BrandIcon />
      <ThemeSwitcher />
    </div>
  );
}
