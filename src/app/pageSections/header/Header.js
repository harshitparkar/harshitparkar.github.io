"use client";
import ThemeSwitcher from "@/app/pageSections/header/header_components/ThemeSwitcher";
import BrandIcon from "@/app/universal_Components/BrandImage";
import { useEffect, useState } from "react";

export default function Header() {
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) return null; // Don't render anything until theme is mounted

  return (
    <div className="flex flex-row justify-between mx-6 my-3">
      <BrandIcon fill={40} />
      <ThemeSwitcher />
    </div>
  );
}
