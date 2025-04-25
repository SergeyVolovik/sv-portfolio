import { Tooltip } from '@/components';
import { PROJECT_CONFIG } from '@/configs';
import { NavLink } from 'react-router-dom';

export const NavigationLinks = () => (
  <div className="flex items-center justify-between gap-4">
    {PROJECT_CONFIG.NAVIGATION_LINKS_CONFIG.map(({ title, icon, to }) => (
      <Tooltip text={title} key={title}>
        <NavLink
          className="active__link default__link transition__effect"
          to={to}
        >
          {icon}
        </NavLink>
      </Tooltip>
    ))}
  </div>
);
