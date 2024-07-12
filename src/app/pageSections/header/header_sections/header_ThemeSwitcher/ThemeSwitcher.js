"use client";

import { useTheme } from "next-themes";
import { useEffect, useState } from "react";
import { MdModeNight, MdOutlineWbSunny } from "react-icons/md";
import { AppConstants } from "../../../../utils/AppConstant";
import themeSwitchStyle from "./theme.module.css";

export default function ThemeSwitcher() {
  const [mounted, setMounted] = useState(false);
  const { theme, setTheme } = useTheme();
  const themeChangeIconSize = 20;

  // useEffect only runs on the client, so now we can safely show the UI
  useEffect(() => {
    setMounted(true);
  }, []);

  /**
   * Sets the theme to the dark theme constant on mount.
   * Uses the setTheme hook to update the theme.
   */
  useEffect(() => {
    setTheme(AppConstants.DARK_THEME);
  }, [setTheme]);

  /**
   * Returns null if the component is not yet mounted.
   * This prevents trying to render the UI before it is ready.
   */
  if (!mounted) {
    return null;
  }

  /**
   * Sets the theme to the light theme constant.
   * Uses the setTheme hook to update the theme.
   */
  const onClickSun = () => {
    setTheme(AppConstants.LIGHT_THEME);
  };

  /**
   * Sets the theme to the dark theme constant.
   * Uses the setTheme hook to update the theme.
   */
  const onClickMoon = () => {
    setTheme(AppConstants.DARK_THEME);
  };

  return (
    <div className="flex flex-row items-center">
      {theme === AppConstants.DARK_THEME ? (
        <MdOutlineWbSunny
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
