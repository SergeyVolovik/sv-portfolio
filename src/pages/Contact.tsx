import { COMMON_CONSTANTS } from '@/constants';
import { CurrentStatus, SectionWithTitle } from '@/features';

export const Contact = () => (
  <>
    <SectionWithTitle
      className="py-4 flex-row items-center bg-white justify-between text-darkGray"
      sectionTitle="Hire Me"
    >
      <CurrentStatus status={COMMON_CONSTANTS.WORK_STATUS.AVAILABLE} />
    </SectionWithTitle>
    <h2 className="text-red-600">TBD Soon!</h2>
  </>
);
