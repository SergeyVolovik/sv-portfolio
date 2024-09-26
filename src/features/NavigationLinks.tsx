import { Link } from '@/components';
import { PROJECT_CONFIG } from '@/config';
import { ACTIVE_LINK_CLASS_NAME, DEFAULT_LINK_CLASS_NAME } from '@/constants';

export const NavigationLinks = () => (
  <>
    {PROJECT_CONFIG.NAVIGATION_LINKS_CONFIG.map(({ title, icon, to }) => (
      <Link
        key={title}
        className={`${DEFAULT_LINK_CLASS_NAME} ${ACTIVE_LINK_CLASS_NAME}`}
        href={to}
      >
        {icon}
        <span>{title}</span>
      </Link>
    ))}
  </>
);
