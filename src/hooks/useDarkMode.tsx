import { DarkIcon, LightIcon } from '@/assets';
import { COMMON_CONSTANTS } from '@/constants';
import { useEffect, useLayoutEffect, useState } from 'react';

const { MODE } = COMMON_CONSTANTS;
export const useDarkMode = () => {
  const prefersLight = window.matchMedia(
    '(prefers-color-scheme: light)'
  ).matches;
  const mode = localStorage.getItem(MODE.DARK_MODE) === 'true' || prefersLight;
  const [isDarkMode, setIsDarkMode] = useState(mode);
  const iconByMode = isDarkMode ? <LightIcon /> : <DarkIcon />;
  const modeText = isDarkMode ? MODE.TEXT.LIGHT : MODE.TEXT.DARK;
  const bodyClassList = document.body.classList;

  useLayoutEffect(() => {
    const toggleDarkModeBody = () => {
      bodyClassList.toggle(MODE.TEXT.DARK, isDarkMode);
      bodyClassList.toggle(MODE.TEXT.LIGHT, !isDarkMode);
    };

    toggleDarkModeBody();
    localStorage.setItem(MODE.DARK_MODE, `${isDarkMode}`);
  }, [isDarkMode]);

  useEffect(() => {
    const timeout = setTimeout(() => {
      bodyClassList.add('transition-colors', 'duration-200');
    }, 50);

    return () => clearTimeout(timeout);
  });

  const toggleDarkMode = () => setIsDarkMode((prev) => !prev);

  return {
    isDarkMode,
    iconByMode,
    toggleDarkMode,
    modeText
  };
};
