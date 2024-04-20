import { DarkIcon, LightIcon } from '@/assets';
import { useEffect, useState } from 'react';

const DARK_MODE = 'darkMode';

export const useDarkMode = () => {
  const mode = localStorage.getItem(DARK_MODE) === 'true';
  const [isDarkMode, setIsDarkMode] = useState(mode);
  const iconByMode = isDarkMode ? <LightIcon /> : <DarkIcon />;

  useEffect(() => {
    const toggleDarkModeBody = () => {
      document.body.classList.toggle('dark', isDarkMode);
      document.body.classList.toggle('light', !isDarkMode);
    };

    toggleDarkModeBody();
    localStorage.setItem(DARK_MODE, `${isDarkMode}`);
  }, [isDarkMode]);

  const toggleDarkMode = () => setIsDarkMode((prev) => !prev);

  return {
    isDarkMode,
    iconByMode,
    toggleDarkMode
  };
};
