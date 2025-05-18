import { HomeIcon, PortfolioIcon, ProfileIcon } from '@/assets';
import { AboutMe, Contact, Home, NotFound, Project, Projects } from '@/pages';

export const NAVIGATION_PATHS = {
  HOME: '/',
  ABOUT_ME: '/aboutme',
  PROJECTS: '/projects',
  PROJECT: '/projects/:id',
  CONTACT: '/contact',
  NOT_FOUND: '*'
};

export const NAVIGATION_LINKS_CONFIG = [
  {
    title: 'Home',
    icon: <HomeIcon />,
    to: NAVIGATION_PATHS.HOME
  },
  {
    title: 'About Me',
    icon: <ProfileIcon />,
    to: NAVIGATION_PATHS.ABOUT_ME
  },
  {
    title: 'Projects',
    icon: <PortfolioIcon />,
    to: NAVIGATION_PATHS.PROJECTS
  }
];

export const NAVIGATION_CHILDREN_CONFIG = [
  {
    path: NAVIGATION_PATHS.HOME,
    element: <Home />
  },
  {
    path: NAVIGATION_PATHS.ABOUT_ME,
    element: <AboutMe />
  },
  {
    path: NAVIGATION_PATHS.PROJECTS,
    element: <Projects />
  },
  {
    path: NAVIGATION_PATHS.PROJECT,
    element: <Project />
  },
  {
    path: NAVIGATION_PATHS.CONTACT,
    element: <Contact />
  },
  {
    path: NAVIGATION_PATHS.NOT_FOUND,
    element: <NotFound />
  }
];
