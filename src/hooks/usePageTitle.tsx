import { NAVIGATION_PAGE_TITLES, NAVIGATION_PATHS } from '@/configs';
import { PROJECTS } from '@/constants';
import { useEffect } from 'react';
import { useLocation, useParams } from 'react-router-dom';

export const usePageTitle = () => {
  const location = useLocation();
  const { id } = useParams();
  const locationPath = location.pathname;
  const projectTitle = id
    ? `${PROJECTS.find(({ id: projectId }) => projectId === Number(id))?.title || 'Project'} ${id} - ${NAVIGATION_PAGE_TITLES['/']}` ||
      ''
    : '';

  useEffect(() => {
    document.title =
      projectTitle ||
      NAVIGATION_PAGE_TITLES[locationPath] ||
      NAVIGATION_PAGE_TITLES['/'];
  }, [location, projectTitle, locationPath]);

  return {
    isContactPage: locationPath === NAVIGATION_PATHS.CONTACT
  };
};
