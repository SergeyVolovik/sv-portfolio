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

const { HOME, ABOUT_ME, PROJECTS, PROJECT, CONTACT, NOT_FOUND } =
  NAVIGATION_PATHS;

export const NAVIGATION_PAGE_TITLES = {
  [HOME]: 'SV Portfolio Website',
  [ABOUT_ME]: 'About Me - SV Portfolio',
  [PROJECTS]: 'Projects - SV Portfolio',
  [PROJECT]: 'Project - SV Portfolio',
  [CONTACT]: 'Contact - SV Portfolio',
  [NOT_FOUND]: 'Not Found - SV Portfolio'
};

export const NAVIGATION_LINKS_CONFIG = [
  {
    title: 'Home',
    icon: <HomeIcon />,
    to: HOME
  },
  {
    title: 'About Me',
    icon: <ProfileIcon />,
    to: ABOUT_ME
  },
  {
    title: 'Projects',
    icon: <PortfolioIcon />,
    to: PROJECTS
  }
];

export const NAVIGATION_CHILDREN_CONFIG = [
  {
    path: HOME,
    element: <Home />
  },
  {
    path: ABOUT_ME,
    element: <AboutMe />
  },
  {
    path: PROJECTS,
    element: <Projects />
  },
  {
    path: PROJECT,
    element: <Project />
  },
  {
    path: CONTACT,
    element: <Contact />
  },
  {
    path: NOT_FOUND,
    element: <NotFound />
  }
];
