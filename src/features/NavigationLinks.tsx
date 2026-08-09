import { Tooltip } from '@/components';
import { NAVIGATION_LINKS_CONFIG } from '@/configs';
import { useCircleNavLinkAnimation } from '@/hooks';
import { NavLink } from 'react-router-dom';

export const NavigationLinks = () => {
  const { containerRef, circleRef, linksRef, setHovered } =
    useCircleNavLinkAnimation();
  const getClassName = ({ isActive }: { isActive: boolean }) =>
    'default__navlink transition__effect' +
    (isActive ? ' active__navlink' : '');

  return (
    <div
      ref={containerRef}
      className="gap-2 xs:gap-[0.8rem] sm:gap-4 flex items-center justify-between relative"
    >
      <div ref={circleRef} className="link__circle" />

      {NAVIGATION_LINKS_CONFIG.map(({ title, icon, to }) => (
        <Tooltip content={title} key={title}>
          <NavLink
            ref={(el) => {
              linksRef.current[to] = el;
            }}
            className={getClassName}
            to={to}
            onMouseEnter={() => setHovered(to)}
            onMouseLeave={() => setHovered(null)}
            end
          >
            {icon}
          </NavLink>
        </Tooltip>
      ))}
    </div>
  );
};
