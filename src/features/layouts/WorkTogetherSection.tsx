import { ButtonGroup, SectionWithName } from '@/features';

export const WorkTogetherSection = () => (
  <SectionWithName className="my-10 flex-col bg-white justify-center items-center gap-5 text-center">
    <h1 className="text-3xl font-bold text-black">Let’s work together</h1>
    <p className="text-darkGray">
      Creating user experience and visual appealing applications
    </p>
    <ButtonGroup />
  </SectionWithName>
);
