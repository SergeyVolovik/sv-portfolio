import { SectionWithName, SocialLinks } from '@/features';

export const Footer = () => {
  return (
    <footer className="w-full flex flex-col items-center justify-center gap-2 text-darkGray rounded-md">
      <SectionWithName
        className="py-6 items-center justify-between"
        sectionName="Follow Me"
      >
        <SocialLinks />
      </SectionWithName>
      <SectionWithName className="py-6 items-center justify-center">
        <span className="text-center text-sm">
          © {new Date().getFullYear()} Serhii Volovyk - All rights reserved
        </span>
      </SectionWithName>
    </footer>
  );
};
