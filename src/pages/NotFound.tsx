import { SectionWithName } from '@/features';

export const NotFound = () => {
  return (
    <SectionWithName
      className="flex-col bg-white"
      sectionName="Oops! Page not found"
    >
      <div className="text-darkGray">404</div>
    </SectionWithName>
  );
};
