import { IconWrapper, Link } from '@/components';
import { SOCIAL_LINKS_CONFIG } from '@/configs';

export const SocialLinks = () => (
  <IconWrapper>
    {SOCIAL_LINKS_CONFIG.map(({ icon, link }) => (
      <Link
        className="p-[5px] flex items-center justify-center bg-white border border-blackRgba7 border-solid rounded-full transition__effect hover__effect active__effect active:bg-blackRgba7"
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
