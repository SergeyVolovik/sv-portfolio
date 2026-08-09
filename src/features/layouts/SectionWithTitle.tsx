import { SectionTitle } from '@/components';
import { SectionWithTitleProps } from '@/interfaces';

export const SectionWithTitle = ({
  sectionTitle,
  className = '',
  children
}: SectionWithTitleProps) => (
  <section
    className={`theme__highlighted-section w-full px-4 flex gap-1 xs:gap-2 rounded-md ${className}`}
  >
    {sectionTitle ? (
      <div className="flex gap-1 xs:gap-2 items-center">
        <span className="dot w-[8px] h-[8px] min-w-[8px] min-h-[8px] bg-lightGray dark:bg-darkGray" />
        <SectionTitle>{sectionTitle}</SectionTitle>
      </div>
    ) : null}
    {children}
  </section>
);
