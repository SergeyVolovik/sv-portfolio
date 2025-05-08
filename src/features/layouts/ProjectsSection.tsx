import { SectionWithTitle } from '@/features';
import { ViewAllButton } from '@/features/controllers/ViewAllButton';

export const ProjectsSection = () => (
  <SectionWithTitle sectionTitle="Projects" className="py-6 justify-between">
    <ViewAllButton />
  </SectionWithTitle>
);
