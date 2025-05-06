import { SectionWithTitle } from '@/features';

export const NotFound = () => {
  return (
    <SectionWithTitle
      className="flex-col bg-white"
      sectionTitle="Oops! Page not found"
    >
      <div className="text-darkGray">404</div>
    </SectionWithTitle>
  );
};
