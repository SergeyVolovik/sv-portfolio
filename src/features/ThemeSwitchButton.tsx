import { useDarkMode } from '@/hooks';

export const ThemeSwitchButton = () => {
  const { iconByMode, toggleDarkMode } = useDarkMode();

  return (
    <button
      className="p-[13px] flex items-center justify-center bg-white rounded-2xl"
      onClick={toggleDarkMode}
    >
      {iconByMode}
    </button>
  );
};
