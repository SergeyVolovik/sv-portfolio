import { IconWrapper, Link } from '@/components';
import { SOCIAL_LINKS_CONFIG } from '@/configs';

export const SocialLinks = () => (
  <IconWrapper>
    {SOCIAL_LINKS_CONFIG.map(({ icon, link }) => (
      <Link
        className="theme__social-icon p-[5px] flex items-center justify-center rounded-full transition__effect hover__effect active__effect"
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
