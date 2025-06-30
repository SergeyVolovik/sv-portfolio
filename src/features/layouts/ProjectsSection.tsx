import { ProjectBlockLink, SectionWithTitle, ViewAllButton } from '@/features';
import { useProjectsForShowing } from '@/hooks';

export const ProjectsSection = ({
  sectionTitle = ''
}: {
  sectionTitle?: string;
}) => {
  const { projectForShowing, isProjectsPage } = useProjectsForShowing();
  const title = isProjectsPage ? sectionTitle : sectionTitle || 'Projects';

  return (
    <SectionWithTitle
      sectionTitle={title}
      className={`py-6 grid grid-cols-2 grid-rows-[38px_auto] gap-4 items-center ${isProjectsPage ? '!flex flex-col items-stretch' : ''}`}
    >
      {isProjectsPage ? null : <ViewAllButton />}
      {projectForShowing.map(({ id, imgSrc, title, description }) => (
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
