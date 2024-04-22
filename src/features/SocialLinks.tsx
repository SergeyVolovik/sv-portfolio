import { IconWrapper, Link } from '@/components';
import { PROJECT_CONFIG } from '@/config';

export const SocialLinks = () => (
  <IconWrapper className="ml-6 flex flex-col gap-[30px] fixed top-1/2 -translate-y-1/2 z-10">
    {PROJECT_CONFIG.SOCIAL_LINKS_CONFIG.map(({ icon, link }) => (
      <Link
        className="icon-action"
        href={link}
        target="_blank"
        rel="noreferrer"
        key={link}
      >
        {icon}
      </Link>
    ))}
  </IconWrapper>
);
