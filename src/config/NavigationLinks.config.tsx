import { ContactIcon, HomeIcon, PortfolioIcon, ProfileIcon } from '@/assets';

export const NAVIGATION_LINKS_CONFIG = [
  {
    title: 'Home',
    icon: <HomeIcon />,
    to: '#home'
  },
  {
    title: 'About Me',
    icon: <ProfileIcon />,
    to: '#about'
  },
  {
    title: 'Projects',
    icon: <PortfolioIcon />,
    to: '#projects'
  },
  {
    title: 'Contact',
    icon: <ContactIcon />,
    to: '#contact'
  }
];
