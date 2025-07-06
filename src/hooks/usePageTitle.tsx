import { NAVIGATION_PAGE_TITLES, NAVIGATION_PATHS } from '@/configs';
import { PROJECTS } from '@/constants';
import { useEffect } from 'react';
import { useLocation, useParams } from 'react-router-dom';

export const usePageTitle = () => {
  const location = useLocation();
  const { id } = useParams();
  const projectTitle = id
    ? `${PROJECTS.find(({ id: projectId }) => projectId === Number(id))?.title || 'Project'} ${id} - ${NAVIGATION_PAGE_TITLES['/']}` ||
      ''
    : '';

  useEffect(() => {
    document.title =
      projectTitle ||
      NAVIGATION_PAGE_TITLES[location.pathname] ||
      NAVIGATION_PAGE_TITLES['/'];
  }, [location]);

  return {
    isContactPage: location.pathname === NAVIGATION_PATHS.CONTACT
  };
};
