import { SectionTitleProps } from '@/interfaces';

export const SectionTitle = ({ className, children }: SectionTitleProps) => (
  <h2 className={`text-[20px] font-normal text-darkGray ${className || ''}`}>
    {children}
  </h2>
);
