import { HomeIcon, PortfolioIcon, ProfileIcon } from '@/assets';
import { AboutMe, Contact, Home, NotFound, Project, Projects } from '@/pages';

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

export const NAVIGATION_CHILDREN_CONFIG = [
  {
    path: '/',
    element: <Home />
  },
  {
    path: '/aboutme',
    element: <AboutMe />
  },
  {
    path: '/projects',
    element: <Projects />
  },
  {
    path: '/projects/:id',
    element: <Project />
  },
  {
    path: '/contact',
    element: <Contact />
  },
  {
    path: '*',
    element: <NotFound />
  }
];
