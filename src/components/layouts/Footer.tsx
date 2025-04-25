import { ButtonGroup, SectionWithName, SocialLinks } from '@/features';

export const Footer = () => {
  return (
    <footer className="w-full flex flex-col items-center justify-center gap-2 text-darkGray rounded-md">
      <SectionWithName className="mb-10 flex-col bg-white justify-center items-center gap-2 text-center">
        <h1 className="text-3xl font-bold text-black">Let’s work together</h1>
        <p className="mb-2">
          Creating user experience and visual appealing applications
        </p>
        <ButtonGroup />
      </SectionWithName>

      <SectionWithName
        className="py-6 flex-row items-center justify-between"
        sectionName="Follow Me"
      >
        <SocialLinks />
      </SectionWithName>
      <SectionWithName className="py-6 items-center justify-center text-sm">
        © {new Date().getFullYear()} Serhii Volovyk - All rights reserved
      </SectionWithName>
    </footer>
  );
};
