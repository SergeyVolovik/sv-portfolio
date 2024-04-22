import { Link } from '@/components';
import { PROJECT_CONFIG } from '@/config';

export const NavigationLinks = () => (
  <>
    {PROJECT_CONFIG.NAVIGATION_LINKS_CONFIG.map(({ title, icon, to }) => (
      <Link
        className="flex items-center gap-1 relative text-white text-2xl font-semibold after:w-full after:h-[5px] after:block after:absolute after:-bottom-1 after:bg-neon after:rounded-full"
        href={to}
        target="_blank"
        rel="noreferrer"
        key={title}
      >
        {icon}
        <span>{title}</span>
      </Link>
    ))}
  </>
);
