import { Footer } from '@/components';
import { STATUS } from '@/constants';
import { CurrentStatus, SectionWithName } from '@/features';

export const Home = () => (
  <>
    <SectionWithName
      className="py-6 flex-row items-center bg-white justify-between text-darkGray"
      sectionName="Software Engineer"
    >
      <CurrentStatus status={STATUS.AVAILABLE} />
    </SectionWithName>
    <Footer />
  </>
);
