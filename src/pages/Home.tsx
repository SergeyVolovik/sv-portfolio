import { COMMON_CONSTANTS } from '@/constants';
import {
  CurrentStatus,
  SectionWithName,
  WorkTogetherSection
} from '@/features';
import { ProjectsSection } from '@/features/layouts';

export const Home = () => (
  <>
    <SectionWithName
      className="py-6 flex-row items-center bg-white justify-between text-darkGray"
      sectionName="Software Engineer"
    >
      <CurrentStatus status={COMMON_CONSTANTS.WORK_STATUS.AVAILABLE} />
    </SectionWithName>
    <ProjectsSection />
    <WorkTogetherSection />
  </>
);
