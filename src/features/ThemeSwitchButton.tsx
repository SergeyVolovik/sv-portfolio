import { IconWrapper } from '@/components';
import { useDarkMode } from '@/hooks';

export const ThemeSwitchButton = () => {
  const { iconByMode, toggleDarkMode } = useDarkMode();

  return (
    <IconWrapper>
      <button className="icon-action" onClick={toggleDarkMode}>
        {iconByMode}
      </button>
    </IconWrapper>
  );
};
