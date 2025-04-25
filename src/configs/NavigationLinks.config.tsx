import { HomeIcon, PortfolioIcon, ProfileIcon } from '@/assets';

export const NAVIGATION_LINKS_CONFIG = [
  {
    title: 'Home',
    icon: <HomeIcon />,
    to: '/'
  },
  {
    title: 'About Me',
    icon: <ProfileIcon />,
    to: '/aboutme'
  },
  {
    title: 'Projects',
    icon: <PortfolioIcon />,
    to: '/projects'
  }
];
