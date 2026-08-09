import { Tooltip } from '@/components';
import { useDarkModeContext } from '@/contexts';
import { formatFirstLetterToUpperCase } from '@/utils';

export const ThemeSwitchButton = () => {
  const { iconByMode, toggleDarkMode, modeText } = useDarkModeContext();
  const toolTipText = `${formatFirstLetterToUpperCase(modeText)} Mode`;

  return (
    <Tooltip content={toolTipText}>
      <button
        className="p-[6px] flex items-center justify-center rounded-full relative before:transition__effect before:w-[35px] before:h-[35px] before:block before:opacity-0 before:absolute before:left-1/2 before:-translate-x-1/2 before:bg-blackRgba7 before:rounded-full before:pointer-events-none hover:before:opacity-100 dark:before:bg-[rgba(66,66,66,0.8)] theme__switcher z-0"
        onClick={toggleDarkMode}
      >
        {iconByMode}
      </button>
    </Tooltip>
  );
};
