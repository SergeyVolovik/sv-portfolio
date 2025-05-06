import { SectionWithTitle, SocialLinks, WorkTogetherSection } from '@/features';
import { usePage } from '@/hooks';

export const Footer = () => {
  const { is404Page, isContactPage } = usePage();

  return (
    <footer className="w-full flex flex-col items-center justify-center gap-2 text-darkGray rounded-md">
      {is404Page || isContactPage ? null : <WorkTogetherSection />}
      <SectionWithTitle
        className="py-6 items-center justify-between"
        sectionTitle="Follow Me"
      >
        <SocialLinks />
      </SectionWithTitle>
      <SectionWithTitle className="py-6 items-center justify-center">
        <span className="text-center text-sm">
          © {new Date().getFullYear()} Serhii Volovyk - All rights reserved
        </span>
      </SectionWithTitle>
    </footer>
  );
};
