import { NAVIGATION_PATHS } from '@/configs';
import { MAX_PROJECTS_TO_SHOW, PROJECTS } from '@/constants';
import { useLocation, useParams } from 'react-router-dom';

export const useProjectsForShowing = () => {
  const location = useLocation();
  const { id } = useParams();
  const isProjectsPage = location.pathname.includes(NAVIGATION_PATHS.PROJECTS);
  const projectForShowing = isProjectsPage
    ? id
      ? PROJECTS.filter(({ id: projectId }) => projectId !== Number(id))
      : PROJECTS
    : PROJECTS.slice(0, MAX_PROJECTS_TO_SHOW);

  return { projectForShowing, isProjectsPage };
};
