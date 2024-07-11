"use client";
import ThemeSwitcher from "@/app/pageSections/header/header_components/ThemeSwitcher";
import BrandIcon from "@/app/universal_Components/BrandImage";
import { useEffect, useState } from "react";
import RecruitmentStatus from "./header_components/recruitmentStatus/RecruitmentStatus";

export default function Header() {
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) return null; // Don't render anything until theme is mounted

  return (
    <div className="flex flex-row justify-between mx-6 my-3">
      <div className="flex flex-row items-center">
        <BrandIcon fill={50} />
      </div>
      <div className="flex flex-row">
        {/* Recruitment status: True => Open for work & False => Still not looking */}
        <RecruitmentStatus getting_recruited={false} />
        <ThemeSwitcher />
      </div>
    </div>
  );
}
