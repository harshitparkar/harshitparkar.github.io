"use client";
import ThemeSwitcher from "@/app/pageSections/header/header_sections/header_ThemeSwitcher/ThemeSwitcher";
import BrandIcon from "@/app/universal_Components/BrandImage";
import { useEffect, useState } from "react";
import RecruitmentStatus from "../header_RecruitmentStatus/RecruitmentStatus";
import MenuNavBar from "../header_MenuNav/MenuNavBar";

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
        <MenuNavBar />
      </div>
      <div className="flex flex-row">
        {/* Recruitment status: True => Open for work & False => Still not looking */}
        <RecruitmentStatus getting_recruited={false} />
        <ThemeSwitcher />
      </div>
    </div>
  );
}
