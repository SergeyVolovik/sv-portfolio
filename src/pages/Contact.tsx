import { Paragraph, Title } from '@/components';
import { COMMON_CONSTANTS } from '@/constants';
import { CurrentStatus, HireMeForm, SectionWithTitle } from '@/features';

export const Contact = () => (
  <>
    <SectionWithTitle
      className="py-4 flex-row items-center bg-white justify-between text-darkGray"
      sectionTitle="Hire Me"
    >
      <CurrentStatus status={COMMON_CONSTANTS.WORK_STATUS.AVAILABLE} />
    </SectionWithTitle>
    <div className="w-full px-4 flex flex-col items-start justify-start gap-4">
      <Title>Get In Touch</Title>
      <Paragraph>
        If you&apos;re interested in working together, feel free to reach out!
      </Paragraph>
      <HireMeForm />
    </div>
  </>
);
