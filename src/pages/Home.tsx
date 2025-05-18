import { COMMON_CONSTANTS } from '@/constants';
import { CurrentStatus, ProjectsSection, SectionWithTitle } from '@/features';

export const Home = () => (
  <>
    <SectionWithTitle
      className="py-4 flex-row items-center bg-white justify-between text-darkGray"
      sectionTitle="Software Engineer"
    >
      <CurrentStatus status={COMMON_CONSTANTS.WORK_STATUS.AVAILABLE} />
    </SectionWithTitle>
    <ProjectsSection />
  </>
);
