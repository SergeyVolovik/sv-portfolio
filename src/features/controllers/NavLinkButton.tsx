import { NavLinkButtonProps } from '@/interfaces';
import { NavLink } from 'react-router-dom';

export const NavLinkButton = ({
  className,
  linkTo,
  children
}: NavLinkButtonProps) => {
  return (
    <NavLink
      className={`btn h-fit px-[10px] py-[6px] items-center justify-between flex-nowrap text-nowrap gap-[6px] rounded-md text-white text-[16px] leading-[24px] transition-all duration-200 ease-linear focus:outline-none focus:ring-secondary focus:ring-opacity-50 hover__effect active__effect ${className || ''}`}
      to={linkTo}
    >
      {children}
    </NavLink>
  );
};
