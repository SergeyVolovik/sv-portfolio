import { NAVIGATION_PATHS } from '@/configs';
import { PROJECTS } from '@/constants';
import { ProjectBlockLink, SectionWithTitle, ViewAllButton } from '@/features';
import { useLocation } from 'react-router-dom';

export const ProjectsSection = () => {
  const location = useLocation();
  const isProjectsPage = location.pathname.includes(NAVIGATION_PATHS.PROJECTS);

  return (
    <SectionWithTitle
      sectionTitle={isProjectsPage ? '' : 'Projects'}
      className={`py-6 grid grid-cols-2 grid-rows-[38px_auto] gap-4 items-center ${isProjectsPage ? '!flex flex-col items-stretch' : ''}`}
    >
      {isProjectsPage ? null : <ViewAllButton />}
      {PROJECTS.map(({ id, imgSrc, title, description }) => (
        <ProjectBlockLink
          key={id}
          projectId={id}
          imgSrc={imgSrc}
          title={title}
          description={description}
        />
      ))}
    </SectionWithTitle>
  );
};
