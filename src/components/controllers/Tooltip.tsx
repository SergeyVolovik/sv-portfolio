import { useDeviceType } from '@/hooks';
import { TooltipProps } from '@/interfaces';

export const Tooltip = ({ children, content, className }: TooltipProps) => {
  const { isMobile } = useDeviceType();

  if (isMobile) return <>{children}</>;

  return (
    <span
      className={`tooltip tooltip-top after:hidden before:mb-[5px] before:p-[3px] before:translate-y-[4px] before:left-1/2 before:-translate-x-1/2 before:rounded-md before:transition-all before:duration-200 ease-linear before:text-pretty hover:before:translate-y-[-2px] ${className}`}
      data-tooltip={content}
    >
      {children}
    </span>
  );
};
