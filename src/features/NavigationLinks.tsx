import { Tooltip } from '@/components';
import { PROJECT_CONFIG } from '@/configs';
import { useCircleNavLinkAnimation } from '@/hooks';
import { NavLink } from 'react-router-dom';

export const NavigationLinks = () => {
  const { containerRef, circleRef, linksRef, setHovered } =
    useCircleNavLinkAnimation();

  return (
    <div
      ref={containerRef}
      className="flex items-center justify-between gap-4 relative"
    >
      <div
        ref={circleRef}
        className="link__circle w-[35px] h-[35px] bg-blackRgba7 absolute -translate-x-1/2 translate-y-[-0.5px] rounded-full transition__effect pointer-events-none"
      ></div>
      {PROJECT_CONFIG.NAVIGATION_LINKS_CONFIG.map(({ title, icon, to }) => (
        <Tooltip text={title} key={title}>
          <NavLink
            ref={(el) => {
              linksRef.current[to] = el;
            }}
            to={to}
            className={({ isActive }) =>
              'default__navlink transition__effect' +
              (isActive ? ' active__navlink' : '')
            }
            onMouseEnter={() => setHovered(to)}
            onMouseLeave={() => setHovered(null)}
          >
            {icon}
          </NavLink>
        </Tooltip>
      ))}
    </div>
  );
};
