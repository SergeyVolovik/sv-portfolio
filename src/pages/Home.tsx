import { Avatar, Paragraph, Title } from '@/components';
import { COMMON_CONSTANTS } from '@/constants';
import {
  ButtonGroup,
  CopyEmailButton,
  CurrentStatus,
  HireButton,
  ProjectsSection,
  SectionWithTitle
} from '@/features';

const IMG_SRC = 'images/my-avatar.gif';

export const Home = () => (
  <>
    <SectionWithTitle
      className="py-4 flex-row items-center bg-white justify-between text-darkGray"
      sectionTitle="Software Engineer"
    >
      <CurrentStatus status={COMMON_CONSTANTS.WORK_STATUS.AVAILABLE} />
    </SectionWithTitle>
    <div className="w-full mt-[-30px] mb-3 flex flex-col items-center justify-between gap-4 p-4 md:flex-row md:gap-6">
      <div className="order-2 md:order-1 w-full h-full flex flex-col items-center gap-2 text-center md:items-start md:text-left">
        <Title>I&apos;m Serhii Volovyk</Title>
        <Paragraph className="flex flex-col gap-[0.5px] mb-3">
          <span>Software Engineer from Ukraine</span>
          <span>Currently developer at Grid Dynamics</span>
        </Paragraph>
        <ButtonGroup>
          <HireButton />
          <CopyEmailButton />
        </ButtonGroup>
      </div>
      <Avatar
        className="order-1 md:order-2 w-full h-full p-2 max-w-[160px] max-h-[160px] bg-blackRgba10"
        imgSrc={IMG_SRC}
      />
    </div>
    <ProjectsSection />
  </>
);
