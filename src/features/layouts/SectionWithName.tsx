import { SectionWithNameProps } from '@/interfaces';

export const SectionWithName = ({
  sectionName,
  className,
  children
}: SectionWithNameProps) => (
  <section
    className={`w-full px-4 flex gap-2 bg-gray rounded-md ${className || ''}`}
  >
    {sectionName ? (
      <div className="flex gap-2 items-center">
        <span className="dot w-[9px] h-[9px] min-w-[9px] min-h-[9px] bg-lightGray"></span>
        <h2 className="text-darkGray">{sectionName}</h2>
      </div>
    ) : null}
    {children}
  </section>
);
