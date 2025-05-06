import { COMMON_CONSTANTS } from '@/constants';
import { CurrentStatus, SectionWithTitle } from '@/features';
import { ProjectsSection } from '@/features/layouts';

export const Home = () => (
  <>
    <SectionWithTitle
      className="py-6 flex-row items-center bg-white justify-between text-darkGray"
      sectionTitle="Software Engineer"
    >
      <CurrentStatus status={COMMON_CONSTANTS.WORK_STATUS.AVAILABLE} />
    </SectionWithTitle>
    <ProjectsSection />
  </>
);
