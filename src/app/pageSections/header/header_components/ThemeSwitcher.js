"use client";

import { useTheme } from "next-themes";
import { useEffect, useState } from "react";
import { FaRegSun } from "react-icons/fa6";
import { MdModeNight } from "react-icons/md";
import themeSwitchStyle from "./theme.module.css";
import { AppConstants } from "../../../utils/AppConstant";

export default function ThemeSwitcher() {
  const [mounted, setMounted] = useState(false);
  const { theme, setTheme } = useTheme();
  const themeChangeIconSize = 20;

  // useEffect only runs on the client, so now we can safely show the UI
  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) {
    return null;
  }

  const onClickSun = () => {
    setTheme(AppConstants.LIGHT_THEME);
  };
  const onClickMoon = () => {
    setTheme(AppConstants.DARK_THEME);
  };

  return (
    <div className="flex flex-row items-center">
      {theme === AppConstants.DARK_THEME ? (
        <FaRegSun
          size={themeChangeIconSize}
          onClick={() => onClickSun()}
          className={themeSwitchStyle.icon}
        />
      ) : (
        <MdModeNight
          size={themeChangeIconSize}
          onClick={() => onClickMoon()}
          className={themeSwitchStyle.icon}
        />
      )}
    </div>
  );
}
